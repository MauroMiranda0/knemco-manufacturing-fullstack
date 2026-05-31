const emitBrowserEvent = (eventName, detail = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new CustomEvent('knemco:conversion', {
      detail: {
        eventName,
        timestamp: Date.now(),
        ...detail,
      },
    })
  );
};

export const trackCtaClickContact = (source) => {
  emitBrowserEvent('cta_click_contact', { source });
};

export const trackContactSubmitAttempt = () => {
  emitBrowserEvent('contact_submit_attempt');
};

export const trackContactSubmitSuccess = () => {
  emitBrowserEvent('contact_submit_success');
};

export const trackContactFlowAbandon = (detail = {}) => {
  emitBrowserEvent('contact_flow_abandon', detail);
};

export const trackBounceRateProxy = (detail = {}) => {
  emitBrowserEvent('bounce_rate_proxy', detail);
};

export const trackSectionEngagement = (detail = {}) => {
  emitBrowserEvent('section_engagement', detail);
};

export const initializeLandingAnalytics = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  const startedAt = Date.now();
  const viewedSections = new Set();
  const scrollMilestones = new Set();
  let hasKeyInteraction = false;
  let hasBounceEvent = false;

  const markInteraction = (detail = {}) => {
    hasKeyInteraction = true;
    trackSectionEngagement({ type: 'key_interaction', ...detail });
  };

  const emitBounceIfNeeded = (reason) => {
    if (hasBounceEvent) {
      return;
    }

    hasBounceEvent = true;
    trackBounceRateProxy({
      reason,
      engaged: hasKeyInteraction,
      elapsedMs: Date.now() - startedAt,
      viewedSections: Array.from(viewedSections),
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target.id || viewedSections.has(entry.target.id)) {
          return;
        }

        viewedSections.add(entry.target.id);
        trackSectionEngagement({ type: 'section_view', sectionId: entry.target.id });
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll('section[id]').forEach((section) => {
    sectionObserver.observe(section);
  });

  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight <= 0 ? 100 : Math.round((window.scrollY / scrollableHeight) * 100);

    [25, 50, 75, 100].forEach((milestone) => {
      if (progress >= milestone && !scrollMilestones.has(milestone)) {
        scrollMilestones.add(milestone);
        hasKeyInteraction = true;
        trackSectionEngagement({ type: 'scroll_depth', depth: milestone });
      }
    });
  };

  const handleClick = (event) => {
    const interactiveElement = event.target.closest('a, button, input, textarea, select');
    if (!interactiveElement) {
      return;
    }

    markInteraction({
      target: interactiveElement.tagName.toLowerCase(),
      sectionId: interactiveElement.closest('section[id]')?.id ?? null,
    });
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      emitBounceIfNeeded('visibility_hidden');
    }
  };

  const handleBeforeUnload = () => {
    emitBounceIfNeeded('before_unload');
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('click', handleClick);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', handleBeforeUnload);

  handleScroll();

  return () => {
    sectionObserver.disconnect();
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClick);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handleBeforeUnload);
    emitBounceIfNeeded('unmount');
  };
};
