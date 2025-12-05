import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, AlertCircle, FileText, CreditCard, Info, Lightbulb } from "lucide-react";

const InsuranceSidebar = () => {
  return (
    <aside className="bg-muted/50 rounded-xl p-6 space-y-6 border border-border/50">
      {/* Section 1: Client Insurance Responsibilities */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-primary">Your Insurance Responsibilities</h3>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-accent">
          <p className="font-semibold text-primary text-sm mb-3">Important Reminders:</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><strong>It is your responsibility to verify your insurance coverage</strong> before beginning treatment. Contact your insurance company to confirm benefits, deductibles, and copays.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><strong>You must notify us immediately of any insurance changes.</strong> If you switch plans or coverage changes during treatment, call us at <a href="tel:3607264141" className="text-primary font-semibold hover:underline">360-726-4141</a> right away.</span>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t">
            We're here to help, but final coverage decisions are made by your insurance company.
          </p>
        </div>
      </div>

      {/* Section 2: CPT Codes & Insurance Questions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Phone className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-primary">Verify Your Coverage</h3>
        </div>
        <div className="bg-white rounded-lg p-4 space-y-4">
          <p className="text-sm font-semibold text-foreground/80">When calling your insurance, provide these CPT codes:</p>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs font-bold text-primary mb-1">Mental Health Services (Therapy):</p>
              <ul className="text-xs text-foreground/70 space-y-0.5">
                <li className="flex justify-between"><span className="font-mono">90791</span><span>Initial assessment</span></li>
                <li className="flex justify-between"><span className="font-mono">90834</span><span>45-min session</span></li>
                <li className="flex justify-between"><span className="font-mono">90837</span><span>53-min session</span></li>
                <li className="flex justify-between"><span className="font-mono">90847</span><span>Family therapy</span></li>
                <li className="flex justify-between"><span className="font-mono">90853</span><span>Group therapy</span></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-primary mb-1">Registered Dietitian Services:</p>
              <ul className="text-xs text-foreground/70 space-y-0.5">
                <li className="flex justify-between"><span className="font-mono">97802</span><span>Initial nutrition assessment</span></li>
                <li className="flex justify-between"><span className="font-mono">97803</span><span>Follow-up session</span></li>
                <li className="flex justify-between"><span className="font-mono">97804</span><span>Group session</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-3">
            <p className="text-xs font-bold text-primary mb-2">Questions to Ask:</p>
            <ol className="text-xs text-foreground/70 space-y-1 list-decimal list-inside">
              <li>Do I have mental health & nutrition benefits?</li>
              <li>What's my deductible and how much have I met?</li>
              <li>What's my copay for these CPT codes?</li>
              <li>Is Beyond Eating Recovery in-network?</li>
              <li>Do I need pre-authorization?</li>
              <li>Are dietitian services (97802-97804) covered?</li>
              <li>What are my out-of-network benefits?</li>
              <li>How many sessions per year are covered?</li>
            </ol>
          </div>

          <div className="bg-accent/10 rounded p-2 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/70"><strong>Tip:</strong> Write down the rep's name, date, and reference number.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Billing Differences */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-primary">Understanding Billing Differences</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Card className="border bg-primary/5">
            <CardContent className="p-3">
              <p className="text-xs font-bold text-primary mb-1">Therapy Services</p>
              <p className="text-[10px] text-muted-foreground mb-2">LPC, LMHC, LCSW</p>
              <ul className="text-[11px] text-foreground/70 space-y-1">
                <li>• Mental health benefits</li>
                <li>• Usually has copays</li>
                <li>• May have session limits</li>
                <li>• Separate MH deductible</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border bg-accent/5">
            <CardContent className="p-3">
              <p className="text-xs font-bold text-primary mb-1">Nutrition Services</p>
              <p className="text-[10px] text-muted-foreground mb-2">Licensed RD</p>
              <ul className="text-[11px] text-foreground/70 space-y-1">
                <li>• Medical nutrition therapy</li>
                <li>• Coverage varies</li>
                <li>• May require MD referral</li>
                <li>• Often limited coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded p-2 mt-2 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800"><strong>Coverage differs:</strong> Your therapy may be covered while dietitian services are not, or vice versa. <strong>Verify both separately.</strong></p>
        </div>
      </div>

      {/* Section 4: What We Can Tell You */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-primary">Insurance Verification: What to Expect</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <p className="text-xs font-bold text-green-800 mb-2 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> We CAN Identify
            </p>
            <ul className="text-[11px] text-green-700 space-y-1">
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>In-network status</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Estimated copay</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Deductible info</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Pre-auth requirements</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Basic benefit details</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded p-3">
            <p className="text-xs font-bold text-amber-800 mb-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> YOU Must Verify
            </p>
            <ul className="text-[11px] text-amber-700 space-y-1">
              <li className="flex items-start gap-1">
                <span className="w-3 h-3 rounded-full border border-amber-600 mt-0.5 flex-shrink-0" />
                <span>Exact out-of-pocket costs</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-3 h-3 rounded-full border border-amber-600 mt-0.5 flex-shrink-0" />
                <span>Specific exclusions</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-3 h-3 rounded-full border border-amber-600 mt-0.5 flex-shrink-0" />
                <span>ED treatment coverage</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-3 h-3 rounded-full border border-amber-600 mt-0.5 flex-shrink-0" />
                <span>Out-of-network rates</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="w-3 h-3 rounded-full border border-amber-600 mt-0.5 flex-shrink-0" />
                <span>Appeal processes</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 text-center">
          Only you as the policyholder can receive complete, binding information from your insurance company.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/20">
        <p className="font-bold text-primary mb-2">Need Help?</p>
        <a href="tel:3607264141" className="text-xl font-bold text-accent hover:underline block mb-3">
          360-726-4141
        </a>
        <p className="text-xs text-muted-foreground mb-4">We'll walk you through the insurance process.</p>
        <div className="space-y-2">
          <Button 
            className="w-full bg-accent hover:bg-accent/90 text-white"
            onClick={() => document.getElementById('insurance-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Verify Your Insurance
          </Button>
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white text-sm">
            <Link to="/faq#insurance">View Complete FAQ →</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default InsuranceSidebar;
