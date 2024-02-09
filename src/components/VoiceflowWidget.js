// src/components/VoiceflowWidget.js
import { useEffect } from 'react';

const VoiceflowWidget = () => {
  useEffect(() => {
    const v = document.createElement('script');
    const s = document.getElementsByTagName('script')[0];

    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '65c5ee5bbfe9831529334876' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };

    v.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    v.type = 'text/javascript';
    s.parentNode.insertBefore(v, s);
  }, []);

  return null;
};

export default VoiceflowWidget;
