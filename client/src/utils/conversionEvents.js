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
