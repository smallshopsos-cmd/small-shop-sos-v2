const contactBlock = `
  <h2>Business details</h2>
  <p><strong>Small Shop SOS</strong> is a trading name of Marnie Danson, sole trader.</p>
  <address>71 Darbys Lane<br>Oakdale<br>Poole<br>BH15 3EU<br>United Kingdom</address>
  <p>Email: <a href="mailto:Hello@smallshopsos.co.uk">Hello@smallshopsos.co.uk</a><br>
  Alternative email: <a href="mailto:smallshopsos@gmail.com">smallshopsos@gmail.com</a><br>
  Telephone and WhatsApp: <a href="tel:+447342729158">07342 729158</a></p>
  <p>Small Shop SOS is not currently VAT registered. No VAT is charged on the prices shown.</p>
`;

const updated = '<p class="legal-updated"><strong>Last updated:</strong> 4 August 2026</p>';
const rights = '<p>Nothing in these terms removes any rights you have under UK consumer law.</p>';
const legalStyles = `<style>
  .legal{font-size:1rem;line-height:1.75}
  .legal h2{font:600 clamp(1.55rem,3vw,2.15rem)/1.15 'Fraunces',serif;letter-spacing:-.025em;margin:42px 0 12px}
  .legal p,.legal li{max-width:76ch}
  .legal ul{padding-left:22px}
  .legal li+li{margin-top:8px}
  .legal address{font-style:normal;padding:18px 20px;background:var(--paper);border-left:3px solid var(--gold);border-radius:8px}
  .legal a{text-decoration:underline;text-decoration-color:var(--gold);text-underline-offset:3px}
  .legal-updated{color:var(--muted);font-size:.85rem}
</style>`;

const pages = {
  'Privacy policy': `
    ${updated}
    <p>This policy explains what personal information Small Shop SOS collects, why it is used and the choices you have. Marnie Danson, trading as Small Shop SOS, is the data controller.</p>
    ${contactBlock}
    <h2>Information we collect</h2>
    <ul><li>Contact details, including your name, email address, telephone number and business name.</li><li>Order details supplied through Shopify, including the service or product bought, order number and payment status. Small Shop SOS does not receive your full card details.</li><li>Information you put into contact, quote and onboarding forms, including website addresses, project details and support requirements.</li><li>Messages sent through the website assistant or WhatsApp.</li><li>Technical and consent information needed to secure and operate the website, and optional analytics information only when you allow it.</li></ul>
    <h2>How and why we use it</h2>
    <ul><li><strong>Enquiries and quotes:</strong> to reply and take steps you request before entering into a contract.</li><li><strong>Orders and services:</strong> to process an order, deliver the service or digital product, provide support and meet the contract with you.</li><li><strong>Business and tax records:</strong> to meet legal obligations and keep appropriate records.</li><li><strong>Security and preventing misuse:</strong> for the legitimate interests of protecting the website, services and customers.</li><li><strong>Optional analytics:</strong> only with your consent, if an analytics service is enabled in future.</li></ul>
    <p>Where legitimate interests are used, Small Shop SOS considers whether the use is necessary, proportionate and fair to you.</p>
    <h2>Where information comes from</h2>
    <p>Most information comes directly from you through checkout, forms, onboarding, email, WhatsApp or the website assistant. Shopify supplies the order, product, payment-status and customer details needed to fulfil and support purchases.</p>
    <h2>Information needed to provide a service</h2>
    <p>Contact, order and relevant onboarding details are required to accept and deliver an order. If they are not provided, Small Shop SOS may be unable to start or complete the work. Optional questions will be identified by the form or explained when asked.</p>
    <h2>Marketing</h2>
    <p>Small Shop SOS does not currently send promotional marketing emails or messages. Order confirmations, onboarding requests, service updates and replies to your questions are service communications, not marketing. This policy will be updated before promotional marketing is introduced.</p>
    <h2>Who processes information</h2>
    <p>Information may be processed by Shopify for checkout, payments and orders; Formspree for website forms; Cloudflare for website hosting, security and the help assistant; Streamlit hosting for Website MOT digital tools; Meta/WhatsApp when you choose WhatsApp; and analytics providers only if optional analytics is enabled and allowed. Professional advisers, insurers or public authorities may receive information where reasonably necessary or legally required.</p>
    <p>Some providers process information outside the UK. Small Shop SOS relies on the safeguards and transfer arrangements made available by those providers where required.</p>
    <h2>How long information is kept</h2>
    <p>Enquiries that do not become orders are normally kept for up to 24 months. Project and support records are normally kept for up to three years after the work ends. Order, invoice and tax records may be kept for six years. Information may be kept longer where needed for a dispute, legal obligation or fraud prevention.</p>
    <h2>Website assistant and WhatsApp</h2>
    <p>The assistant uses your question, the current page and limited recent conversation context to produce an answer. It does not make legal or similarly significant automated decisions. Never enter passwords, card details, bank details, PINs or verification codes. When you choose WhatsApp, Meta's own privacy terms also apply.</p>
    <h2>Your rights</h2>
    <p>Depending on the circumstances, you may ask for access, correction, deletion, restriction or a portable copy of your information, and you may withdraw consent at any time. Contact either email address above.</p>
    <h2>Your right to object</h2>
    <p><strong>You may object to the use of your personal information where Small Shop SOS relies on legitimate interests.</strong> Explain what you object to by contacting either email address above. Your request will be considered in line with data-protection law.</p>
    <h2>Complaints</h2>
    <p>Please contact Small Shop SOS first so the concern can be investigated. You can also complain to the Information Commissioner's Office at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
  `,
  'Cookie policy': `
    ${updated}
    <p>This website uses essential browser storage to remember your cookie choices and support core website functions. Shopify may use cookies when you move to its secure checkout. Optional analytics and marketing tools remain blocked unless you allow the relevant category.</p>
    <h2>Essential storage</h2><p>Essential storage supports security, navigation and remembering your choices. It cannot be switched off through the consent panel because the website needs it to work.</p>
    <p><strong>Storage name:</strong> <code>sos-cookie-consent-v1</code><br><strong>Type:</strong> first-party browser local storage<br><strong>Purpose:</strong> records whether analytics and marketing were accepted or rejected<br><strong>Duration:</strong> up to six months, unless you change the choice or remove browser data sooner</p>
    <h2>Optional analytics</h2><p>Analytics may be used to understand visits and improve the website only when you allow it. No analytics tool is currently active on the Small Shop SOS website.</p>
    <h2>Optional marketing</h2><p>Advertising pixels or campaign tracking may be used only when you allow marketing cookies. No advertising or marketing tracker is currently active on the Small Shop SOS website.</p>
    <h2>Third-party services</h2><p>Shopify, Cloudflare and Formspree may use strictly necessary technology to provide their services. WhatsApp and other external sites may set their own cookies after you choose to visit them.</p>
    <h2>Change your choice</h2><p>You may withdraw or change consent at any time. Rejecting optional storage does not prevent you from viewing services, products or checkout.</p><p><button class="button secondary" type="button" data-reset-consent>Open cookie settings</button></p><p>You can also remove website data using your browser settings. Blocking all browser storage may affect checkout or other essential functions.</p>
    ${contactBlock}
  `,
  'Terms and conditions': `
    ${updated}
    <p>These terms apply when you use this website or buy from Small Shop SOS. Product descriptions, the checkout summary and any written quote form part of the agreement.</p>
    ${contactBlock}
    <h2>Before placing an order</h2><p>Each product or service page explains the main features, price, scope and expected turnaround. Review the order summary and correct any mistakes before continuing through Shopify Checkout. Monthly plans also show the recurring price, billing frequency and any one-time setup fee.</p>
    <h2>Orders and prices</h2><p>Prices are shown in pounds sterling. Small Shop SOS is not VAT registered, so VAT is not added. Payment is processed securely by Shopify. An order is accepted when Shopify confirms it. If there is an obvious pricing, scope or availability error, Small Shop SOS will contact you promptly and, where the law permits cancellation, provide a refund.</p>
    <h2>Contract confirmation</h2><p>Shopify sends an order confirmation by email. Keep that email with the product description and these terms for your records. These terms can also be saved or printed from your browser.</p>
    <h2>Your responsibilities</h2><p>You must provide accurate information, lawful content and the access reasonably needed for the work. Do not send passwords through forms, email, WhatsApp or the assistant. Secure access arrangements will be agreed when needed. You must have permission to use any text, images, data, accounts and systems you supply.</p>
    <h2>Scope and third-party costs</h2><p>Only the work listed in the package or written quote is included. Hosting, domains, themes, apps, advertising, platform charges and other third-party costs are excluded unless expressly stated. Extra work requires your approval and may be quoted separately.</p>
    <h2>Intellectual property</h2><p>You keep ownership of material you supply. Once all agreed charges are paid, you may use the final deliverables created specifically for you for the agreed business purpose. Small Shop SOS keeps ownership of pre-existing methods, templates, code, know-how and tools, while granting the access or licence needed to use the completed work.</p>
    <h2>Availability and responsibility</h2><p>Reasonable care and skill will be used. Results affected by search engines, advertising platforms, third-party software, customer behaviour or later changes cannot be guaranteed. Nothing excludes liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud, or your statutory consumer rights.</p>
    <h2>Cancellation and refunds</h2><p>Cancellation rights depend on whether you buy as a consumer or wholly for business purposes, whether work has started and whether digital content has been supplied. Read the <a href="/refunds/">Refund Policy</a>, <a href="/service-terms/">Service Terms</a>, <a href="/subscription-terms/">Subscription Terms</a> and <a href="/digital-product-terms/">Digital Product Terms</a> that apply to your order.</p>
    <h2>Law and resolving problems</h2><p>Please contact Small Shop SOS first so there is a fair chance to put matters right. These terms are governed by the law of England and Wales. If you are a consumer, you keep any mandatory right to bring a claim in the courts that apply to you.</p>
    ${rights}
  `,
  'Refund policy': `
    ${updated}
    <p>Small Shop SOS sells digital services and digital products. No physical goods are supplied. Please contact <a href="mailto:Hello@smallshopsos.co.uk">Hello@smallshopsos.co.uk</a> as soon as possible if you want to cancel or believe something is wrong.</p>
    <h2>How to cancel</h2><p>Send a clear cancellation request by email. Include your name, checkout email, order number and the service or product you want to cancel. You do not have to use special wording or give a reason.</p>
    <h2>Consumer cancellation period</h2><p>If you are buying as a consumer at a distance, you will normally have 14 days from the day after the contract is made to cancel a service. If you expressly ask for work to begin during that period and then cancel, you may need to pay a fair amount for work already completed. The cancellation right can end once the service has been fully performed, but only where the required express request and acknowledgement were obtained.</p>
    <h2>Digital products</h2><p>For immediately supplied digital content, checkout or delivery may ask you to consent to supply beginning during the 14-day period and acknowledge that the cancellation right is then lost once supply begins. If the required consent and acknowledgement are not obtained, the statutory cancellation right is not treated as lost. This does not affect your rights if digital content is faulty, misdescribed or not supplied with reasonable care and skill.</p>
    <h2>Bespoke packages and deposits</h2><p>A bespoke quote will state the deposit, agreed work and planned start date. You may cancel a bespoke package until 48 hours before the agreed work is due to begin. If you cancel with less than 48 hours’ notice, Small Shop SOS may retain the deposit to cover reserved time, preparation and reasonable loss caused by the late cancellation. Any amount retained will be fair and proportionate to the actual circumstances. This rule does not remove statutory consumer cancellation rights where they apply.</p>
    <h2>Business purchases</h2><p>If you buy wholly for business purposes, cancellation and refunds follow the package, written quote and these terms rather than consumer cooling-off rules. This does not affect rights that cannot lawfully be excluded.</p>
    <h2>Problems with delivery</h2><p>If Small Shop SOS cannot provide the purchased work, the affected amount will be refunded. If work does not match the agreed scope, contact us promptly so it can be reviewed and, where appropriate, corrected, repeated, reduced in price or refunded in line with applicable law.</p>
    <h2>How refunds are paid</h2><p>Refunds due under consumer cancellation law will be initiated within 14 days after Small Shop SOS is informed of the cancellation. Approved refunds are returned through Shopify to the original payment method unless another method is expressly agreed. Bank processing times after a refund is initiated are outside Small Shop SOS's control.</p>
    <h2>Cancellation form</h2><p>You may copy and email the following if useful, but using this form is optional: “I give notice that I cancel my contract for [digital service or digital product], ordered on [date]. My name is [name] and my order number is [number].”</p>
    ${rights}${contactBlock}
  `,
  'Service terms': `
    ${updated}
    <p>These terms apply to website, ecommerce, copywriting, SEO, product-data, business-support and automation services.</p>
    <h2>Starting the work</h2><p>After checkout, complete the onboarding request and provide the information and access listed for the package. The stated turnaround begins when the required information, access and approvals have been received, not necessarily on the purchase date. Bespoke work begins on the start date agreed in the written quote.</p>
    <h2>Delivery and delays</h2><p>Turnaround times are working-day estimates unless a written quote says they are fixed. Customer delays, missing access, third-party outages or a changed scope may move the delivery date. Small Shop SOS will explain material delays in plain English.</p>
    <h2>Revisions and corrections</h2><p>The package description or written quote states any revision rounds included. A revision adjusts work within the agreed scope; it is not a new page, new service, new product set or changed brief. If no revision allowance is stated, requested preference changes are not automatically included.</p>
    <p><strong>Correction promise:</strong> tell Small Shop SOS promptly, preferably within seven days of delivery, if completed work contains a genuine mistake or does not match the agreed scope. That issue will be reviewed and, where confirmed, corrected without an extra service charge. New instructions, changed preferences or expanded work are quoted separately and nothing extra is charged without approval. This seven-day request does not limit any statutory rights.</p>
    <h2>Three-day aftercare</h2><p>Standard service packages include three Small Shop SOS working days of aftercare after the service launches or is marked complete. Because working hours follow a rotating schedule, the exact support dates will be confirmed in the completion or launch email.</p><p>Aftercare covers reasonable questions, minor updates and problems directly connected to the completed work. It does not include new work, new features or an expanded brief. Website MOT products, CSV and product-data work, and bespoke packages do not include this standard aftercare. Any aftercare for bespoke work must be stated in its written quote. This section does not limit statutory rights where supplied work is faulty or does not match the agreement.</p>
    <h2>Access and changes</h2><p>Use secure delegated access where available and never send passwords or verification codes. Back up important systems where appropriate. Supported store or website changes are not made without the authority needed for the agreed work.</p>
    <h2>Approvals</h2><p>You are responsible for checking names, prices, product data, claims, legal wording and final content before publication. Small Shop SOS is not a solicitor, accountant or regulated financial adviser.</p>
    <h2>Ending or cancelling a service</h2><p>Either side may pause or end work for serious breach, unlawful instructions, abuse, non-payment or failure to provide essential access. Charges and refunds will reflect the agreed scope, work completed and any rights that apply by law. Bespoke package cancellations and deposits follow the 48-hour rule in the <a href="/refunds/">Refund Policy</a>.</p>
    ${rights}${contactBlock}
  `,
  'Subscription terms': `
    ${updated}
    <p>These terms apply to monthly Small Shop SOS support plans sold through Shopify.</p>
    <h2>Payments</h2><p>The checkout shows the one-time setup fee, the monthly price, the first payment due and the billing frequency. The setup fee is charged once and does not recur. The support price renews monthly through Shopify until cancelled.</p>
    <h2>Monthly allowance</h2><p>Each plan includes only the allowance and tasks shown in its description. Unused time does not roll over. Extra work is carried out only after approval and is charged at the stated extra-work rate or a separate written quote.</p>
    <h2>Term and cancellation</h2><p>Three months is recommended so ongoing work has time to settle, but it is not a fixed minimum term unless the checkout and product description expressly state otherwise. You may request cancellation at any time without a cancellation fee.</p>
    <p>To avoid another renewal, send the cancellation at least seven days before the next billing date by email to <a href="mailto:Hello@smallshopsos.co.uk">Hello@smallshopsos.co.uk</a> or by Business WhatsApp to <a href="https://wa.me/447342729158">07342 729158</a>. Include your name, order number and checkout email so the subscription can be identified. A customer account is not required. Small Shop SOS will confirm the cancellation in writing, normally within two working days.</p>
    <p>If fewer than seven days remain before renewal, contact Small Shop SOS immediately. Reasonable efforts will be made to stop the payment, but it may already be scheduled or processed by Shopify. Statutory cancellation and refund rights still apply where applicable.</p>
    <h2>Changes to a plan</h2><p>Any change to the recurring price or material service terms will be explained before it takes effect. You may cancel rather than accept a future change. Existing paid periods will be honoured unless both sides agree otherwise.</p>
    <h2>Setup work, missed payments and access</h2><p>Once setup work has been supplied, ending the monthly plan does not automatically refund the one-time setup fee. Any statutory cancellation or refund right still applies. Support may be paused when a recurring payment fails. Ending a subscription does not remove charges already properly due for setup or work supplied.</p>
    ${rights}${contactBlock}
  `,
  'Digital product terms': `
    ${updated}
    <p>These terms apply to Website MOT V1, Website MOT V2 and any other digital tools that Small Shop SOS makes available for online purchase. No physical product is supplied.</p>
    <h2>Access and permitted use</h2><p>Your order confirmation explains how to access the purchased product. Enter the order number and checkout email exactly as requested. Access is for the buyer's own internal business use and must not be resold, shared publicly or used to test a website without authority.</p>
    <h2>One report per purchase</h2><p>Each Website MOT V1 or V2 purchase creates one report for the website address submitted, unless the product page expressly states otherwise. Check the full website address carefully before starting. Submitting the wrong address may use the report entitlement. Contact Small Shop SOS before running the check if you are unsure. A replacement report is not automatically included for a customer input mistake, but faults caused by the tool will be investigated and corrected where appropriate.</p>
    <h2>What the result means</h2><p>Reports and guidance are practical information based on the website and systems available at the time. They do not guarantee rankings, sales, accessibility compliance, security or legal compliance, and they do not replace specialist legal, financial, security or accessibility advice.</p>
    <h2>Approval before changes</h2><p>Website MOT V2 may explain or preview supported improvements. No store or website change is made without the customer approval required for that change. Buying a report does not automatically buy implementation work unless the product description expressly includes it.</p>
    <h2>Availability and support</h2><p>Reasonable care is taken to keep tools available, but maintenance, third-party services and internet failures may cause interruptions. If an order link does not arrive or the product cannot be accessed, contact Small Shop SOS with the order number and checkout email—never a password or card detail.</p>
    <p>Website MOT and other digital products do not include the standard three-working-day service aftercare. Reasonable help with a missing order link, access fault or confirmed tool error is still provided.</p>
    <h2>Cancellation and faults</h2><p>If you are a consumer and ask for immediate digital supply, you may be asked to consent to supply beginning and acknowledge loss of the 14-day cancellation right once supply starts. Your legal rights remain if digital content is faulty, misdescribed or not provided with reasonable care and skill.</p>
    ${rights}${contactBlock}
  `,
};

export const legalContent = title => legalStyles + (pages[title] || `<p>Please contact Small Shop SOS for this policy.</p>${contactBlock}`);

