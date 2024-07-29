'use client'
import React, { useEffect } from 'react';

const UrovidaWidget: React.FC = () => {
    useEffect(() => {
        const scriptId = 'zl-widget-s';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "//platform.docplanner.com/js/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    });

    return (
        <iframe className="h-[300px]"    data-id="oe00fa0gcm" src="https://widgets.doctoralia.com.br/facility/widget/certificate/urovida-medjockey?id=oe00fa0gcm" ></iframe>
    );
};

export default UrovidaWidget;
