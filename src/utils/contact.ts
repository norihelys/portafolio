export function initContactForm(config: {
    publicKey: string;
    serviceId: string;
    templateId: string;
    successUrl: string;
    formId?: string;
    botcheckId?: string;
}) {
    interface WindowWithEmailJS extends Window {
        emailjs?: {
            init: (publicKey: string) => void;
            sendForm: (
                serviceId: string,
                templateId: string,
                form: HTMLElement,
            ) => Promise<unknown>;
        };
    }
    const w = window as unknown as WindowWithEmailJS;

    if (!w.emailjs) {
        console.warn("EmailJS SDK not loaded");
        return;
    }

    w.emailjs.init(config.publicKey);

    const form = document.getElementById(config.formId || "contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const hp = document.getElementById(
            config.botcheckId || "botcheck",
        ) as HTMLInputElement;
        if (hp && hp.value) return;

        if (!w.emailjs) {
            console.error("EmailJS not loaded");
            alert("Error: Servicio de email no disponible.");
            return;
        }

        w.emailjs
            .sendForm(config.serviceId, config.templateId, form)
            .then(function () {
                window.location.href = config.successUrl;
            })
            .catch(function (err: unknown) {
                console.error("EmailJS Error:", err);
                alert("Error: " + JSON.stringify(err));
            });
    });
}
