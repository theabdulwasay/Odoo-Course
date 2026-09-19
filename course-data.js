// Odoo for Business - Master Knowledge Dataset & Job-Ready Functional Consultant Course
// Based on 36-Hour, 6-Week Functional Consultant Program with 50+ Interview Q&As & Client Templates

const ODOO_COURSE_DATA = {
  courseInfo: {
    title: "ODOO FOR BUSINESS: ERP & Business Automation",
    subtitle: "A Practical 36-Hour Program for Real Business Use",
    duration: "36 Hours | 6 Weeks | 6 Hours/Week (2 Sessions of 3 Hours)",
    platform: "Odoo Online & Odoo.sh (Enterprise Edition & Studio)",
    targetAudience: "Students, Working Professionals, Business Owners, ERP Consultants",
    overview: "This course teaches how to run an entire business on Odoo ERP. You will connect Sales, Purchase, Inventory, Accounting, Manufacturing, HR, and Studio without writing code."
  },

  weeks: [
    {
      id: "week-1",
      number: 1,
      theme: "Getting Started and the Sales Process",
      hours: 6,
      appsCovered: ["Essentials", "CRM", "Sales"],
      summary: "Learn Odoo architecture, company setup, user access control, multi-currency, lead-to-quotation-to-sales-order workflows, and payment terms.",
      sessions: [
        {
          id: "session-1a",
          code: "1A",
          title: "Odoo Architecture, Cloud Hosting, Multi-Currency, Company Setup & Users",
          duration: "3 Hours",
          objectives: [
            "Master Odoo modular architecture, ORM concept, and Community vs Enterprise differences.",
            "Compare Cloud Hosting (Odoo Online / Odoo.sh PaaS) vs On-Premise self-managed Linux servers.",
            "Set up Multi-Company structures, Multi-Currency exchange rate updates, users, and security access rights."
          ],
          content: `
            <div class="space-y-6">
              <!-- Dual Language Overview Banner -->
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    In this session, we lay the foundation of Odoo ERP. You will learn Odoo's modular framework, set up Multi-Company and Multi-Currency environments (PKR, USD, EUR, AED), configure company profiles, and assign granular security access rights to staff.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Is session mein hum Odoo ERP ki buniyad sikhain ge. Multi-Company (ek hi database mein 2 companies) aur Multi-Currency (PKR, USD, AED) setup karna, Exchange Rates update karna, company profile banana aur users ki security levels define karna seekhein ge.
                  </div>
                </div>
              </div>

              <!-- Workflow Visual Diagram -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-2">
                  <i data-lucide="git-branch" class="w-4 h-4 text-purple-600"></i>
                  <span>Odoo Architecture & Multi-Company / Currency Setup Flow</span>
                </h5>
                <div class="flex flex-wrap items-center justify-between gap-3 text-center text-xs">
                  <div class="flex-1 min-w-[140px] bg-purple-50 p-3.5 rounded-xl border border-purple-200">
                    <div class="font-bold text-purple-900 mb-1">1. Master Database</div>
                    <div class="text-[11px] text-purple-700">Odoo Online / Odoo.sh</div>
                  </div>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400 hidden sm:block"></i>
                  <div class="flex-1 min-w-[140px] bg-indigo-50 p-3.5 rounded-xl border border-indigo-200">
                    <div class="font-bold text-indigo-900 mb-1">2. Companies & Multi-Currency</div>
                    <div class="text-[11px] text-indigo-700">Company A (PKR) | Company B (USD)</div>
                  </div>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400 hidden sm:block"></i>
                  <div class="flex-1 min-w-[140px] bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                    <div class="font-bold text-emerald-900 mb-1">3. Access Control</div>
                    <div class="text-[11px] text-emerald-700">Record Rules & Security Groups</div>
                  </div>
                </div>
              </div>

              <!-- Deep Functional Details Box -->
              <div class="bg-slate-900 text-white p-5 rounded-2xl space-y-3 text-xs">
                <h5 class="font-bold text-amber-400 text-sm flex items-center space-x-2">
                  <i data-lucide="cpu" class="w-4 h-4"></i>
                  <span>Deep Functional Consultant Topics: Multi-Currency & Record Rules</span>
                </h5>
                <div class="space-y-2 text-slate-200">
                  <p>
                    <strong>1. Automatic Currency Rate Sync:</strong> Navigate to <code>Accounting &rarr; Configuration &rarr; Settings &rarr; Currencies</code>. Enable <em>Automatic Currency Rates</em> (Providers: European Central Bank / Central Bank of UAE). Odoo will update daily exchange rates automatically.
                  </p>
                  <p>
                    <strong>2. Foreign Exchange Gain/Loss Accounts:</strong> When invoicing in USD ($1,000 at 278 PKR/USD) and receiving payment later at 280 PKR/USD, Odoo automatically posts a 2,000 PKR entry to <em>Exchange Difference Gain Account</em>.
                  </p>
                  <p>
                    <strong>3. Record Rules vs Access Rights:</strong> <em>Access Rights</em> determine CRUD permissions (Create, Read, Update, Delete) per model. <em>Record Rules</em> filter rows based on domain filters (e.g., <code>[('company_id', 'in', company_ids)]</code>).
                  </p>
                </div>
              </div>

              <!-- Real Business Case -->
              <div class="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl text-xs space-y-2">
                <div class="flex items-center space-x-2 font-bold text-amber-900 text-sm">
                  <i data-lucide="briefcase" class="w-4 h-4 text-amber-600"></i>
                  <span>Real Business Case: Apex Global Traders (Karachi & Dubai)</span>
                </div>
                <p class="text-amber-950 leading-relaxed">
                  <strong>Scenario:</strong> Apex Global imports electronics from China to Karachi (PKR) and sells to Dubai clients in AED. They require consolidated financial reports in PKR.
                </p>
                <p class="text-amber-900 leading-relaxed">
                  <strong>Consultant Setup:</strong> Enable Multi-Currency. Set Main Company Currency to PKR. Activate AED and USD. Enable <em>Multi-Company Consolidation</em> so accounting reports aggregate AED revenue into PKR using live rate.
                </p>
              </div>

              <!-- Step by Step Configuration Guide -->
              <div class="border rounded-2xl p-5 bg-slate-50 space-y-3">
                <h5 class="font-bold text-slate-900 text-sm">Step-by-Step Odoo Configuration Menu Paths</h5>
                <ul class="space-y-2 text-xs text-slate-800">
                  <li><code>Settings &rarr; General Settings &rarr; Companies</code>: Create Company 1 (Apex Pakistan) and Company 2 (Apex Dubai).</li>
                  <li><code>Settings &rarr; Users & Companies &rarr; Users &rarr; Create</code>: Add "Ali (Sales Manager)". Assign Allowed Companies = Apex Pakistan only.</li>
                  <li><code>Accounting &rarr; Configuration &rarr; Currencies</code>: Activate USD and AED. Click <em>Update Rates</em>.</li>
                </ul>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 1A: Setup Multi-Company, Multi-Currency & User Roles",
            instructions: [
              "Create a database 'Master-TrainingDB'.",
              "Set up Company 1 (Local PKR) and Company 2 (Export USD).",
              "Activate USD currency and manually set an exchange rate of 1 USD = 278 PKR.",
              "Create 2 users: 'Sales Rep' (Assigned to PKR company) and 'Finance Manager' (Assigned to both companies).",
              "Log in as Sales Rep and confirm they cannot switch to USD company."
            ]
          },
          quiz: [
            {
              question: "Which feature in Odoo restricts data visibility so users only see records from their assigned company?",
              options: ["Pricelists", "Record Rules", "Payment Terms", "Fiscal Positions"],
              correctIndex: 1,
              explanation: "Record rules act as SQL WHERE clauses, filtering records based on company_id or user_id."
            }
          ]
        },
        {
          id: "session-1b",
          code: "1B",
          title: "Odoo Essentials, CRM Lead Scoring, Sales Order & Payment Terms",
          duration: "3 Hours",
          objectives: [
            "Master universal navigation: Contacts, Activities, Filters, Group By, Favorites, Excel Import/Export.",
            "Manage CRM Lead generation, Predictive Lead Scoring, Opportunity conversion, and Lost reason analysis.",
            "Build Quotations, apply Quotation Templates, configure Pricelists (Volume/Discount), Payment Terms (30% Advance, Net 30), and confirm Sales Orders."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Build commercial lead-to-cash workflows! Learn CRM pipeline stages, automated lead probability scoring, quotation templates, complex payment terms (e.g. 30% Down Payment, 70% Net 30), and stock reservation upon order confirmation.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    CRM pipeline mein lead scoring, opportunity stage progression, custom payment terms (e.g. 30% advance, 70% 30 din baad) aur discount pricelist ke sath quotation confirm karna.
                  </div>
                </div>
              </div>

              <!-- Workflow Diagram -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-2">
                  <i data-lucide="git-commit" class="w-4 h-4 text-indigo-600"></i>
                  <span>Complete Sales Commercial Pipeline</span>
                </h5>
                <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div class="bg-slate-100 p-3 rounded-xl border">
                    <div class="font-bold text-slate-800">1. Inquiry Lead</div>
                    <div class="text-[10px] text-slate-500">Website / Email</div>
                  </div>
                  <div class="bg-indigo-50 p-3 rounded-xl border border-indigo-200">
                    <div class="font-bold text-indigo-900">2. Qualified</div>
                    <div class="text-[10px] text-indigo-700">Probability 60%</div>
                  </div>
                  <div class="bg-blue-50 p-3 rounded-xl border border-blue-200">
                    <div class="font-bold text-blue-900">3. Quotation</div>
                    <div class="text-[10px] text-blue-700">Payment Terms Set</div>
                  </div>
                  <div class="bg-purple-50 p-3 rounded-xl border border-purple-200">
                    <div class="font-bold text-purple-900">4. Customer Sign</div>
                    <div class="text-[10px] text-purple-700">Online Portal</div>
                  </div>
                  <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200 font-bold text-emerald-950">
                    <div>5. Confirmed SO</div>
                    <div class="text-[10px] text-emerald-700">Auto Delivery Created</div>
                  </div>
                </div>
              </div>

              <!-- Deep Functional Details Box -->
              <div class="bg-slate-900 text-white p-5 rounded-2xl space-y-3 text-xs">
                <h5 class="font-bold text-amber-400 text-sm flex items-center space-x-2">
                  <i data-lucide="credit-card" class="w-4 h-4"></i>
                  <span>Deep Functional Consultant Topics: Payment Terms Computation</span>
                </h5>
                <div class="space-y-2 text-slate-200">
                  <p>
                    <strong>Configuring Complex Payment Terms:</strong> Go to <code>Invoicing / Sales &rarr; Configuration &rarr; Payment Terms &rarr; Create</code>. Add 2 lines:
                  </p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Line 1: Type = Percent, Value = 30.00%, Due = 0 Days (Immediate Advance).</li>
                    <li>Line 2: Type = Balance, Due = 30 Days after invoice date.</li>
                  </ul>
                  <p>
                    When an invoice for $10,000 is generated, Odoo automatically splits payment dues into two journal items: $3,000 due today, $7,000 due in 30 days!
                  </p>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 1B: CRM Opportunity to Sales Order with Advance Payment Terms",
            instructions: [
              "Create a Payment Term '30% Advance, Balance 30 Days'.",
              "Create 5 CRM leads. Convert 2 into Opportunities.",
              "Create a Quotation for 50 Laptops, select your custom Payment Term and apply a 5% discount pricelist.",
              "Send quotation via email, accept on customer portal view, and Confirm Sales Order."
            ]
          },
          quiz: [
            {
              question: "How does Odoo handle a payment term configured as '30% Advance, Balance 30 Days'?",
              options: [
                "Generates two separate invoice PDFs automatically",
                "Splits the Accounts Receivable due lines into two dated maturity terms on the same transaction",
                "Rejects confirmation until cash is deposited in bank",
                "Cancels delivery orders"
              ],
              correctIndex: 1,
              explanation: "Odoo creates multiple due date lines in journal entries to track installment maturity dates."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Week 1 Checkpoint",
        description: "Submit 1 fully confirmed sales order originated from your own CRM pipeline, with a customer pricelist or percentage discount applied.",
        deliverables: [
          "Screenshot of CRM Kanban pipeline showing won & lost opportunities.",
          "Confirmed Sales Order PDF export showing line items, discount/pricelist, and total price."
        ]
      }
    },

    {
      id: "week-2",
      number: 2,
      theme: "Purchasing and Inventory Management",
      hours: 6,
      appsCovered: ["Purchase", "Inventory", "Barcode (Overview)"],
      summary: "Master product master setup, 3-way matching, Landed Costs (freight/customs duty), multi-step warehouse routes, valuation, Lots & Serial numbers, dropshipping, and removal strategies (FIFO/FEFO).",
      sessions: [
        {
          id: "session-2a",
          code: "2A",
          title: "Product Setup, 3-Way Matching & Landed Costs (Freight/Customs)",
          duration: "3 Hours",
          objectives: [
            "Configure products: Storable vs Consumable vs Service, Units of Measure (UoM), and packaging.",
            "Execute Purchase cycle: RFQ, PO, Goods Receipt, Vendor Bill, and 3-Way Matching.",
            "Configure Landed Costs to allocate shipping freight, customs duties, and insurance into product valuation."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Master product master data and Landed Costs! Learn how to add freight charges and customs duties to received inventory so your product cost reflects the true landed cost.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Purchasing aur Landed Costs (Customs duty aur kraya / freight charges) ko inventory ki true purchase cost mein allocate karna seekhein ge.
                  </div>
                </div>
              </div>

              <!-- Landed Cost Diagram -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-2">
                  <i data-lucide="calculator" class="w-4 h-4 text-emerald-600"></i>
                  <span>Landed Cost Inventory Valuation Calculation</span>
                </h5>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                  <div class="bg-blue-50 p-3.5 rounded-xl border border-blue-200">
                    <div class="font-bold text-blue-900 mb-1">1. Purchase Price</div>
                    <div class="text-[11px] text-blue-700">100 Laptops @ $500 = $50,000</div>
                  </div>
                  <div class="bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                    <div class="font-bold text-amber-900 mb-1">2. Landed Expenses</div>
                    <div class="text-[11px] text-amber-700">Freight ($2,000) + Duty ($3,000)</div>
                  </div>
                  <div class="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 font-bold text-emerald-950">
                    <div class="mb-1">3. Final Landed Unit Cost</div>
                    <div class="text-[11px] text-emerald-800">$550 per Laptop (Auto Updated!)</div>
                  </div>
                </div>
              </div>

              <!-- Deep Functional Details Box -->
              <div class="bg-slate-900 text-white p-5 rounded-2xl space-y-3 text-xs">
                <h5 class="font-bold text-amber-400 text-sm flex items-center space-x-2">
                  <i data-lucide="layers" class="w-4 h-4"></i>
                  <span>Deep Functional Consultant Topics: Landed Cost Allocation Methods</span>
                </h5>
                <div class="space-y-2 text-slate-200">
                  <p>
                    Odoo supports 5 Landed Cost Split Methods under <code>Inventory &rarr; Configuration &rarr; Landed Cost Types</code>:
                  </p>
                  <ul class="list-disc pl-5 space-y-1 text-slate-300">
                    <li><strong>Equal:</strong> Splits expenses equally across all line items.</li>
                    <li><strong>By Quantity:</strong> Allocates proportional to quantity of items.</li>
                    <li><strong>By Current Cost:</strong> Allocates proportional to purchase value.</li>
                    <li><strong>By Weight:</strong> Allocates based on total item weight (Best for shipping).</li>
                    <li><strong>By Volume:</strong> Allocates based on volume (m³).</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 2A: Purchase Order & Landed Cost Valuation Setup",
            instructions: [
              "Enable Landed Costs in Inventory Settings.",
              "Create a Landed Cost Product 'Customs Duty' (Product Type: Service, Landed Cost enabled).",
              "Create a PO for 100 Storable items at $10 each. Confirm PO and receive stock.",
              "Create a Vendor Bill from Freight forwarding company for $200.",
              "Create a Landed Cost record, link it to Stock Receipt, select Split Method 'By Quantity', and Validate.",
              "Verify product cost updated from $10 to $12!"
            ]
          },
          quiz: [
            {
              question: "Which Landed Cost split method distributes shipping charges based on item weight?",
              options: ["Equal", "By Current Cost", "By Weight", "By Quantity"],
              correctIndex: 2,
              explanation: "Split by Weight calculates proportional freight costs based on the total mass of each product."
            }
          ]
        },
        {
          id: "session-2b",
          code: "2B",
          title: "Multi-Step Routes, Lots & Serials, Expiry FEFO, Dropshipping & Reordering",
          duration: "3 Hours",
          objectives: [
            "Configure Warehouses, Locations, Putaway rules, and Lots/Serial Numbers.",
            "Set up 1-Step, 2-Step (Input & Stock), and 3-Step (Quality Check) routes.",
            "Apply removal strategies: FIFO, LIFO, and FEFO (First Expired First Out).",
            "Configure Dropshipping routes, Consignment stock, and Automated Reordering Rules."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Advanced logistics! Configure Lot & Serial Number tracking, Expiration dates, FEFO picking, Dropshipping (vendor ships directly to client), and Min/Max automated reordering rules.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Lots & Serial Numbers track karna, Expiry (FEFO) picking rule, Dropshipping (vendor directly client ko deliver kare) aur Reordering rules setup karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 2B: Lot Tracking, FEFO Expiry & Dropshipping Route",
            instructions: [
              "Enable Lot & Serial Numbers, Expiration Dates, and Dropshipping in Inventory Settings.",
              "Create product 'Antibiotic Injection' with Tracking = By Lots, Expiration Date = Enabled, Removal Strategy = FEFO.",
              "Receive 2 lots: Lot A (Expires in 3 months) and Lot B (Expires in 12 months).",
              "Create a Sales Order for 5 units and confirm.",
              "Verify that Odoo automatically reserves Lot A (closest expiry) on picking list!",
              "Test Dropshipping route on a custom product."
            ]
          },
          quiz: [
            {
              question: "What route allows selling items to customers without ever receiving them into your local warehouse?",
              options: ["3-Step Receipt", "Dropshipping", "Cross-Docking", "Internal Transfer"],
              correctIndex: 1,
              explanation: "Dropshipping triggers a Purchase Order to vendor with delivery address set directly to customer."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Week 2 Checkpoint",
        description: "Document one complete cycle from Purchase Order to Stock Receipt to Vendor Bill. Include a short note on warehouse route and removal strategy used.",
        deliverables: [
          "Documented purchase & inventory trail (PO #, Stock Receipt #, Vendor Bill #).",
          "Brief rationale explaining why FIFO or FEFO was selected for your product category."
        ]
      }
    },

    {
      id: "week-3",
      number: 3,
      theme: "Accounting and Finance Backbone",
      hours: 6,
      appsCovered: ["Accounting", "Invoicing"],
      summary: "Understand double-entry bookkeeping, Chart of Accounts, fiscal positions, deferred revenues/expenses, asset depreciation, bank reconciliation, and year-end closing.",
      sessions: [
        {
          id: "session-3a",
          code: "3A",
          title: "Double-Entry Accounting, Chart of Accounts, Fiscal Positions & Assets",
          duration: "3 Hours",
          objectives: [
            "Master double-entry accounting rules (Debits, Credits, Journals, Ledger).",
            "Configure Chart of Accounts (CoA), Sales/Purchase Taxes, and Fiscal Positions.",
            "Set up Asset Management & Depreciation rules, Deferred Revenue & Expenses."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Master advanced accounting! Understand automated journal postings, Asset depreciation schedules (straight line / declining), Deferred Revenue, and Fiscal Position tax overrides.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Advanced Accounting: Fixed Asset Depreciation (monthly automatic depreciation entry), Deferred Revenue (advance software subscription revenue recognition) aur Tax Fiscal Positions.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 3A: Asset Management & Deferred Revenue Setup",
            instructions: [
              "Create Asset Model 'Office Furniture' (Depreciation Method: Straight Line, 36 Months).",
              "Purchase a Delivery Van for $36,000 and link to Asset Model.",
              "Validate Asset board and verify Odoo posts monthly $1,000 depreciation journal entries automatically!",
              "Set up a 12-month Deferred Revenue contract."
            ]
          },
          quiz: [
            {
              question: "Which accounting feature automatically spreads 1-year advance customer payments into monthly revenue entries?",
              options: ["Fiscal Positions", "Deferred Revenue", "Asset Depreciation", "Bank Reconciliation"],
              correctIndex: 1,
              explanation: "Deferred revenue holds unearned income in liability accounts and releases it monthly into revenue."
            }
          ]
        },
        {
          id: "session-3b",
          code: "3B",
          title: "Bank Reconciliation Models, Analytic Accounting & Year-End Closing",
          duration: "3 Hours",
          objectives: [
            "Register Vendor Bills, apply OCR digitization, process batch payments.",
            "Perform Bank Reconciliation using automated reconciliation models.",
            "Configure Analytic Accounting & Cost Centers for project profitability tracking.",
            "Generate P&L, Balance Sheet, Tax Returns, and execute Year-End Retained Earnings Closing."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Analytic Accounting & Year-End Closing! Learn how Analytic Accounts track department/project cost centers without altering your primary Chart of Accounts, and master Year-End fiscal audit closing.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Analytic Accounting (Cost Centers) se projects ki exact profitability measure karna aur fiscal year lock karke Retained Earnings entry post karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 3B: Analytic Cost Centers & Year-End Audit",
            instructions: [
              "Create Analytic Plans: 'Departments' (Sales, Marketing) and 'Projects' (Client A Project).",
              "Post a Vendor Bill for $5,000 and assign 60% to Marketing analytic account and 40% to Sales.",
              "Generate Analytic Profitability Report to view cost center margins.",
              "Lock fiscal year date under Accounting Settings and review Retained Earnings balance."
            ]
          },
          quiz: [
            {
              question: "Why do ERP consultants use Analytic Accounts instead of creating new accounts in Chart of Accounts?",
              options: [
                "Analytic accounts replace standard accounting",
                "Analytic accounts allow tracking cost center profitability without cluttering the financial General Ledger",
                "They are required by tax authorities",
                "They only work for inventory"
              ],
              correctIndex: 1,
              explanation: "Analytic accounting provides multi-dimensional reporting (projects/departments) without modifying the GL."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Week 3 Checkpoint",
        description: "Submit a full transaction trail covering 1 customer invoice and 1 vendor bill, fully reconciled against a bank statement, with a paragraph explaining key report numbers.",
        deliverables: [
          "Reconciliation audit trail screenshot.",
          "Generated Profit & Loss and Balance Sheet PDF reports.",
          "Short 1-paragraph summary explaining financial status to a business owner."
        ]
      }
    },

    {
      id: "week-4",
      number: 4,
      theme: "Manufacturing and Human Resources",
      hours: 6,
      appsCovered: ["Manufacturing (MRP)", "Employees", "Payroll", "Time Off"],
      summary: "Set up production processes with multi-level Bills of Materials (BoM), Work Center OEE, Employee records, Time Off accruals, and Python Salary Rule Payroll engines.",
      sessions: [
        {
          id: "session-4a",
          code: "4A",
          title: "Multi-Level BoMs (Sub-assemblies), Work Center OEE & Costing",
          duration: "3 Hours",
          objectives: [
            "Understand Manufacturing (MRP) concepts and multi-level Bills of Materials (BoMs).",
            "Configure Work Centers, labor rates, and Overall Equipment Effectiveness (OEE).",
            "Execute Manufacturing Orders (MO) with sub-assembly auto-reservations and cost analysis."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Complex manufacturing! Create multi-level BoMs where producing a finished product automatically triggers child MOs for sub-assemblies (e.g. PCB Board inside a Computer), and compute Work Center OEE efficiency.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Multi-level Bill of Materials (BoM mein sub-components kiy liye child MO auto-trigger ho) aur Work Centers ki efficiency (OEE) calculate karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 4A: Multi-Level BoM & Sub-Assembly MO Trigger",
            instructions: [
              "Create Sub-Assembly product 'Engine Block' with its own BoM.",
              "Create Finished Product 'Car' with BoM listing 'Engine Block' + 4 Wheels.",
              "Set route on Engine Block = 'Manufacture'.",
              "Create MO for 1 Car and verify Odoo automatically triggers child MO for 1 Engine Block!"
            ]
          },
          quiz: [
            {
              question: "What happens when a finished product BoM includes a sub-component whose route is set to 'Manufacture'?",
              options: [
                "Odoo throws an error",
                "Odoo automatically generates a child Manufacturing Order for the sub-component",
                "Purchase Order is sent to supplier",
                "BoM gets converted to kit"
              ],
              correctIndex: 1,
              explanation: "Multi-level BoMs automatically trigger child MOs to satisfy sub-assembly requirements."
            }
          ]
        },
        {
          id: "session-4b",
          code: "4B",
          title: "Human Resources: Employee Contracts, Leave Accruals & Python Payroll Engine",
          duration: "3 Hours",
          objectives: [
            "Set up Employee master records, departments, job positions, and contracts.",
            "Configure Time Off accrual plans (e.g., 1.25 days earned per month).",
            "Understand Payroll Salary Structures, Python salary rules (categories.BASIC * 0.10), Work Entries, and Payslips."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    HR & Payroll calculation engine! Understand how Salary Rules use simple Python expressions to compute allowances, income tax slabs, social security, and end of service gratuity.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    HR profiles, Leave accrual plans (har mahine 1.25 leaves credit ho) aur Payroll salary rules (Basic, Medical allowance, Income Tax deduction) configure karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 4B: Leave Accrual & Python Salary Rule Payslip",
            instructions: [
              "Create Employee record with contract salary = $4,000/month.",
              "Set up a Salary Rule 'House Rent Allowance (HRA)' with Python Code: <code>result = contract.wage * 0.40</code>.",
              "Set up a Salary Rule 'Tax Deduction' with Python Code: <code>result = - (categories.GROSS * 0.05)</code>.",
              "Generate monthly payslip and verify Net Salary calculation."
            ]
          },
          quiz: [
            {
              question: "In Odoo Payroll Salary Rules, how do you reference the employee contract monthly base wage?",
              options: ["employee.salary", "contract.wage", "payroll.base", "user.wage"],
              correctIndex: 1,
              explanation: "In Odoo payroll Python expressions, contract.wage accesses the active employment contract wage."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Week 4 Checkpoint",
        description: "Submit 1 completed Manufacturing Trail (BoM to finished MO) and 1 completed HR Trail (Employee profile, contract, leave request, and confirmed payslip).",
        deliverables: [
          "Completed Manufacturing Order PDF/Screenshot.",
          "Confirmed Payslip breakdown screenshot."
        ]
      }
    },

    {
      id: "week-5",
      number: 5,
      theme: "Automation, Customization, and Reporting (Studio)",
      hours: 6,
      appsCovered: ["Odoo Studio", "Approvals", "Automated Actions", "Spreadsheet"],
      summary: "Unlock the full power of Odoo Studio! Add custom fields, edit views, build multi-level approvals, create Python Automated Server Actions, design PDF reports, and build executive dashboards without code.",
      sessions: [
        {
          id: "session-5a",
          code: "5A",
          title: "Odoo Studio Essentials: Custom Fields, Relational Views & XML Reports",
          duration: "3 Hours",
          objectives: [
            "Use Odoo Studio to create custom fields (Text, Selection, Date, Relational Many2one/One2many, Computed).",
            "Modify List, Form, Kanban, and Search views.",
            "Understand standard Cloud Account limits vs custom Python module requirements.",
            "Customize PDF report layouts using Studio XML/QWeb report editor."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Master Odoo Studio! Learn how to create custom relational fields connecting models, add search filters, and edit QWeb PDF templates without writing backend module code.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Odoo Studio drag-and-drop tool se custom fields create karna, Relational links (Many2one) lagana aur PDF quotation headers/footers edit karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 5A: Studio Custom Relational Field & PDF Report Edit",
            instructions: [
              "Open Odoo Studio on Sales Order model.",
              "Add a Many2one custom field 'Project Manager' linking to res.users model.",
              "Add a Selection field 'Client Priority' (VIP, Normal, Low).",
              "Edit the Quotation PDF report to display 'Client Priority' in the header banner."
            ]
          },
          quiz: [
            {
              question: "What field type connects a record in Sales Order to a specific user record in the Users model?",
              options: ["Selection Field", "Many2one Relational Field", "Char Field", "One2many Field"],
              correctIndex: 1,
              explanation: "A Many2one field creates a relational link pointing to a single record in a target model."
            }
          ]
        },
        {
          id: "session-5b",
          code: "5B",
          title: "Studio Automated Actions (Python Server Actions), Approvals & Spreadsheets",
          duration: "3 Hours",
          objectives: [
            "Build multi-level Approval rules on business documents.",
            "Configure Automated Server Actions using Python context variables (record, env, time).",
            "Build executive management dashboards using Pivot tables, Charts, and Odoo Spreadsheet."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Automated Server Actions! Learn how to write simple Python code snippets inside Studio Automated Actions using <code>record.write({'x_custom': 'Value'})</code> to execute custom business logic automatically.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Studio Automated Actions mein Python code snippets se automatic email notifications, status changes aur chatter messages send karna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 5B: Python Automated Server Action & Approval Gate",
            instructions: [
              "Create a 2-Level Approval Rule on Purchase Orders over $10,000.",
              "Create an Automated Action on Sales Order stage update.",
              "Set Action Type = Execute Python Code. Code: <code>record.message_post(body='High Value Deal Won!')</code>.",
              "Test action by confirming a $20,000 Sales Order and verify chatter post!"
            ]
          },
          quiz: [
            {
              question: "In Odoo Studio Python Automated Actions, what variable represents the current record being saved?",
              options: ["self", "record", "object", "this"],
              correctIndex: 1,
              explanation: "In Odoo Automated Actions Python code context, record represents the active browse record."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Week 5 Checkpoint",
        description: "Submit 1 complete Studio Package containing custom fields, 1 approval rule, 1 automated action, and 1 executive dashboard screenshot.",
        deliverables: [
          "Screenshots showing before and after Studio modifications.",
          "Tested Approval rule & Automated action execution proof."
        ]
      }
    },

    {
      id: "week-6",
      number: 6,
      theme: "Project Tools, Deployment Options, and Final Practical Exam",
      hours: 6,
      appsCovered: ["Project", "Helpdesk", "Odoo.sh", "Hosting Comparison"],
      summary: "Explore project task milestones, helpdesk SLA management, master deployment options (Odoo.sh Git workflow), and pass the comprehensive final practical exam.",
      sessions: [
        {
          id: "session-6a",
          code: "6A",
          title: "Project Management, Helpdesk SLAs & Odoo.sh Git Branching Workflow",
          duration: "3 Hours",
          objectives: [
            "Set up Project workflows, task stages, sub-tasks, and project milestones.",
            "Configure Helpdesk ticketing pipelines, customer portals, and Service Level Agreements (SLAs).",
            "Master Odoo.sh PaaS: Production, Staging, and Development Git branch management."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Odoo.sh Git branching workflow! Understand how Odoo.sh automatically creates testing databases when developers push code to GitHub staging branches, preventing broken code in live production.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Odoo.sh architecture: Production (live client database), Staging (testing database with real data backup), aur Development (coding branch) ka mawaazna.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 6A: Project Milestones, Helpdesk SLA & Hosting Decision",
            instructions: [
              "Create a Project 'ERP Implementation' with 4 stages: Backlog, In Progress, Testing, Done.",
              "Set up a Helpdesk Team 'Support Desk' with an SLA Policy: Urgent tickets must be resolved within 4 hours.",
              "Complete a Hosting Evaluation Worksheet choosing the best hosting for 3 sample business scenarios."
            ]
          },
          quiz: [
            {
              question: "What happens when you push a new Git branch to Odoo.sh PaaS platform?",
              options: [
                "It immediately updates live production server",
                "Odoo.sh automatically provisions a new isolated staging database build for testing",
                "It gets rejected",
                "It deletes backup files"
              ],
              correctIndex: 1,
              explanation: "Odoo.sh automatically spins up a containerized staging database whenever a branch is pushed to GitHub."
            }
          ]
        },
        {
          id: "session-6b",
          code: "6B",
          title: "Comprehensive Business Scenario Practical Test & Certification",
          duration: "3 Hours",
          objectives: [
            "Receive a real-world business case study covering Sales, Purchase, Inventory, Accounting & Studio requirements.",
            "Configure the full end-to-end Odoo setup independently under timed conditions.",
            "Prepare a 1-page business setup summary and present a live system walkthrough for sign-off."
          ],
          content: `
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-sm border border-purple-800">
                <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                  <span>Bilingual Guide • English & Roman Urdu</span>
                </div>
                <h4 class="font-extrabold text-lg mb-2">Session Overview / Session Ka Khulasa</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-purple-100">
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">English:</strong>
                    Final practical assessment! Configure an entire business setup from scratch for a complex trading client scenario.
                  </div>
                  <div class="bg-white/10 p-3.5 rounded-xl border border-white/10 leading-relaxed">
                    <strong class="text-amber-200 block mb-1">Roman Urdu:</strong>
                    Final Practical Exam! Full client scenario (Sales, Purchase, Stock, Accounts, Studio) setup karke walkthrough presentation dena.
                  </div>
                </div>
              </div>
            </div>
          `,
          labExercise: {
            title: "Lab 6B / Final Exam Case Study Brief",
            instructions: [
              "Scenario: 'Apex Trade Global' imports electronics, assembles custom bundles, and sells to wholesale & retail clients.",
              "1. Set up Company details, currency PKR, 2 users, and 2-step warehouse receiving route.",
              "2. Configure products (Storable component, Finished bundle) with BoM.",
              "3. Run purchase order for components, receive stock, assemble 10 bundles via MO.",
              "4. Sell 5 bundles to customer with a 10% discount pricelist.",
              "5. Generate customer invoice, register bank payment, reconcile, and present P&L statement."
            ]
          },
          quiz: [
            {
              question: "What is the minimum overall recommended score required to pass the Odoo for Business certification?",
              options: ["40%", "50%", "60%", "90%"],
              correctIndex: 2,
              explanation: "A minimum score of 60% across checkpoints, mid-test, Studio project, and final exam is required for certification."
            }
          ]
        }
      ],
      checkpoint: {
        title: "Final Exam & Course Completion Checkpoint",
        description: "Complete the full timed case study setup in your database, submit your 1-page configuration walkthrough summary, and verify completion.",
        deliverables: [
          "1-Page Executive Summary PDF of your Odoo configuration.",
          "Complete end-to-end audit trail (PO -> Receipt -> MO -> SO -> Delivery -> Invoice -> Payment -> Bank Rec -> P&L)."
        ]
      }
    }
  ],

  // 50+ TOP ODOO INTERVIEW QUESTIONS & ANSWERS (ENGLISH + ROMAN URDU)
  interviewQuestions: [
    {
      category: "Architecture & Hosting",
      q: "What is the key functional difference between Odoo Community and Odoo Enterprise?",
      ansEnglish: "Odoo Community is open-source and free, providing core sales, basic invoicing, and inventory. Odoo Enterprise is the paid licensed edition that unlocks Odoo Studio (no-code customizations), full Financial Accounting, Work Centers in Manufacturing, Payroll, Helpdesk, and mobile app support.",
      ansUrdu: "Odoo Community free aur basic edition hai jisme core sales aur stock milta hai. Odoo Enterprise paid edition hai jisme Odoo Studio, Complete Accounting, Payroll, Work Centers aur Helpdesk milta hai.",
      example: "Scenario: Client wants custom fields without coding. You must recommend Odoo Enterprise because Odoo Studio is not present in Community."
    },
    {
      category: "Architecture & Hosting",
      q: "When should you advise a client to choose Odoo.sh instead of Odoo Online?",
      ansEnglish: "Recommend Odoo Online if the client can run on standard Odoo apps with only Studio modifications (zero backend Python coding). Recommend Odoo.sh if the client needs custom third-party Python modules, custom API integrations, or GitHub version control.",
      ansUrdu: "Agar client ko koi custom Python backend code nahi likhna (sirf Studio use karna hai) toh Odoo Online best hai. Agar custom Python modules ya third-party integration chahiye toh Odoo.sh chuno.",
      example: "Example: A bank needing custom Python encryption algorithms requires Odoo.sh or On-Premise."
    },
    {
      category: "Purchasing & Inventory",
      q: "What is 3-Way Matching in Odoo Purchasing, and why is it critical for businesses?",
      ansEnglish: "3-Way Matching verifies three documents before authorizing vendor bill payment: 1. Purchase Order (ordered qty), 2. Goods Receipt (received qty), 3. Vendor Bill (billed qty). It prevents overpaying for damaged or undelivered goods.",
      ansUrdu: "3-Way Matching 3 cheezon ko compare karta hai: PO (kitna order hua), Stock Receipt (kitna delivered hua), aur Vendor Bill (kitna charge hua). Yeh supplier ko faltu paise dene se bachata hai.",
      example: "Scenario: Vendor billed for 100 units, but warehouse received only 80. Odoo blocks paying the missing 20 units."
    },
    {
      category: "Purchasing & Inventory",
      q: "Explain the difference between FIFO and FEFO inventory removal strategies in Odoo.",
      ansEnglish: "FIFO (First In First Out) picks the oldest lot received into stock first. FEFO (First Expired First Out) picks the lot closest to its expiration date, regardless of when it arrived in the warehouse.",
      ansUrdu: "FIFO mein sab se pehle aaya hua maal pehle sale hota hai. FEFO mein jis lot ki Expiration Date sab se nazdeek ho woh pehle pick hota hai (dawaon ya khane peene ki cheezon ke liye).",
      example: "Example: Milk cartons with expiry date Oct 5 will be picked before cartons expiring Oct 20 under FEFO."
    },
    {
      category: "Purchasing & Inventory",
      q: "How do Landed Costs work in Odoo Inventory valuation?",
      ansEnglish: "Landed Costs allow allocating additional charges like customs duties, freight, and insurance directly onto received inventory stock lines, updating product cost price accurately.",
      ansUrdu: "Landed Costs kraya aur customs duty ko receive kiye gaye stock ki purchase cost mein add kar dete hain taakey product ki true cost price update ho jaye.",
      example: "Example: Buying a laptop for $500 + $50 shipping = Landed Cost updates inventory value to $550."
    },
    {
      category: "Purchasing & Inventory",
      q: "What is the difference between Dropshipping and Cross-Docking in Odoo?",
      ansEnglish: "Dropshipping delivers goods directly from the vendor to the customer without touching your warehouse. Cross-Docking unloads incoming vendor shipments and immediately transfers them to outgoing customer delivery trucks without storing them in warehouse racks.",
      ansUrdu: "Dropshipping mein supplier direct client ko maal bhejta hai. Cross-docking mein warehouse mein maal aate hi bina rack mein rakhe direct customer ki gaari mein load ho jata hai.",
      example: "Example: Perishable fruit shipments cross-dock straight from incoming trucks to retail delivery vans."
    },
    {
      category: "Accounting & Finance",
      q: "What are Fiscal Positions in Odoo and how do they work?",
      ansEnglish: "Fiscal Positions automatically map default taxes and accounts to alternate taxes based on customer/vendor rules, such as mapping 18% domestic tax to 0% export tax for foreign buyers.",
      ansUrdu: "Fiscal Positions automatically customer ki location ke mutabiq tax rate change kar deti hain. Local customer par 18% GST aur international client par 0% Export tax lagta hai.",
      example: "Scenario: An invoice issued to a US client automatically strips Pakistani GST using Fiscal Position rules."
    },
    {
      category: "Accounting & Finance",
      q: "How does Deferred Revenue accounting work in Odoo?",
      ansEnglish: "Deferred Revenue records upfront customer cash payments as a liability and automatically generates monthly journal entries to recognize revenue as services are rendered over time.",
      ansUrdu: "Deferred Revenue advance mile hue paise liability mein rakhta hai aur har mahine automatically revenue account mein shift karta rehta hai.",
      example: "Example: Annual software subscription of $12,000 paid in Jan recognizes $1,000 revenue every month for 12 months."
    },
    {
      category: "Accounting & Finance",
      q: "What is the purpose of Analytic Accounting in Odoo?",
      ansEnglish: "Analytic Accounting tracks project, department, or cost center revenues and expenses without polluting or expanding the main Chart of Accounts General Ledger.",
      ansUrdu: "Analytic Accounting se aap Chart of Accounts ko kharab kiye bina mukhtalif projects ya departments ki alag alag profit/loss report dekh sakte hain.",
      example: "Example: Tagging a fuel bill to Analytic Account 'Marketing Campaign A' vs 'Sales Dept'."
    },
    {
      category: "Manufacturing & MRP",
      q: "What is a Multi-Level Bill of Materials (BoM) in Odoo?",
      ansEnglish: "A Multi-Level BoM contains sub-assemblies that have their own child BoMs. Confirming a parent Manufacturing Order automatically generates child Manufacturing Orders for required sub-components.",
      ansUrdu: "Multi-Level BoM mein product ke andar sub-parts ki apni BoM hoti hai. Main car banate waqt engine ki MO automatically auto-create ho jati hai.",
      example: "Example: Manufacturing a Bicycle triggers a child MO for assembling the Wheel Sub-Assembly."
    },
    {
      category: "Studio & Customization",
      q: "How do Python Automated Actions work inside Odoo Studio?",
      ansEnglish: "Studio Automated Actions trigger python code snippets on record creation, update, or timed deltas. The Python context provides record (current BrowseRecord) and env (ORM environment).",
      ansUrdu: "Automated Actions specific trigger par Python code run karti hain. record current document ko represent karta hai aur env se database query chalti hai.",
      example: "Example: record.write({'x_priority': 'High'}) sets priority automatically when order total exceeds $50,000."
    }
  ],

  // FREELANCE & CLIENT IMPLEMENTATION TEMPLATES
  clientTemplates: [
    {
      id: "template-req",
      title: "Client Requirement Gathering Questionnaire",
      category: "Discovery",
      content: `1. Company Name & Subsidiary Structure:
2. Operating Currencies (Main & Secondary):
3. Key Modules Required: [ ] Sales  [ ] Purchase  [ ] Inventory  [ ] Accounting  [ ] MRP  [ ] HR
4. Warehouse Receiving Strategy: [ ] 1-Step  [ ] 2-Step (Input+Stock)  [ ] 3-Step (Quality Check)
5. Inventory Removal Rule: [ ] FIFO  [ ] LIFO  [ ] FEFO (Expiry)
6. Tax Structure & Registration IDs:
7. Existing Software / Legacy Data Source: (Excel / QuickBooks / Tally / SAP)`
    },
    {
      id: "template-csv-contacts",
      title: "Data Migration CSV Template - Contacts / Customers",
      category: "Data Migration",
      content: `name,is_company,street,city,country_id/id,phone,email,vat
"Apex Global Traders",TRUE,"Main Boulevard","Karachi",base.pk,"+923001234567","info@apextraders.com","1234567-8"
"TechDistro FZE",TRUE,"Sheikh Zayed Road","Dubai",base.ae,"+97141234567","sales@techdistro.ae",""
"John Doe",FALSE,"Street 5","Lahore",base.pk,"+923009876543","john@gmail.com",""`
    },
    {
      id: "template-csv-products",
      title: "Data Migration CSV Template - Product Master",
      category: "Data Migration",
      content: `default_code,name,detailed_type,list_price,standard_price,uom_id/id,categ_id/id
"LAP-001","Dell XPS 15 Laptop","product",1200.00,950.00,uom.product_uom_unit,product.product_category_all
"CH-002","Ergonomic Office Chair","product",150.00,90.00,uom.product_uom_unit,product.product_category_all
"SRV-001","Software Installation Service","service",100.00,0.00,uom.product_uom_unit,product.product_category_all`
    },
    {
      id: "template-uat",
      title: "User Acceptance Testing (UAT) Sign-Off Document",
      category: "Go-Live",
      content: `PROJECT UAT SIGN-OFF FORM
Client Name: __________________________
Odoo Database URL: _____________________

Test Scenarios Verified:
[ ] 1. CRM Lead to Sales Order Quotation Confirmation - PASS
[ ] 2. Purchase Order to Stock Receipt & Landed Cost Valuation - PASS
[ ] 3. Customer Invoice Posting & Bank Statement Reconciliation - PASS
[ ] 4. Manufacturing Order Sub-Assembly Production - PASS
[ ] 5. Studio Custom Fields & Approval Rules Validation - PASS

Client Representative Signature: __________________   Date: __________`
    }
  ],

  // FREELANCE & CLIENT IMPLEMENTATION BLUEPRINT
  implementationBlueprint: {
    title: "Odoo Functional Consultant Client Implementation Blueprint",
    steps: [
      {
        phase: "Phase 1: Scope & Discovery",
        title: "Requirement Gathering & Gap Analysis",
        english: "Conduct interview sessions with client department heads (Sales, Warehouse, Finance). Document standard workflows and identify gaps requiring Odoo Studio or custom configuration.",
        urdu: "Client ke heads (Sales, Accounts, Stock) ke sath meeting karke unki daily requirements notebook par note karein aur Odoo standard flows ke sath Gap Analysis tayyar karein."
      },
      {
        phase: "Phase 2: Master Data Migration",
        title: "Data Cleaning & CSV Import Preparation",
        english: "Clean legacy data in Excel. Format CSV import sheets for: 1. Chart of Accounts, 2. Contacts, 3. Products & Opening Stock, 4. Open Invoices & Bills.",
        urdu: "Purane Excel records ko Odoo standard templates mein format karein: Contacts, Products, Opening Stock Balances aur Chart of Accounts import karein."
      },
      {
        phase: "Phase 3: Sandbox Configuration & UAT",
        title: "System Setup & User Acceptance Testing",
        english: "Configure company details, taxes, warehouse routes, BoMs, and Studio approval rules in a trial sandbox database. Have client test end-to-end cycles.",
        urdu: "Trial database mein poora workflow setup karein aur client team se complete testing (PO -> Receipt -> Invoice -> Payment) karwayein."
      },
      {
        phase: "Phase 4: Go-Live & End-User Training",
        title: "Database Cut-over & Staff Training",
        english: "Perform final cut-over on production database. Conduct role-specific training sessions for Sales Reps, Warehouse Staff, and Accountants. Provide 30-day post-launch support.",
        urdu: "Production live database ready karein, staff ko unke specific role ki training dein aur launch ke baad 30 days support provide karein."
      }
    ]
  }
};
