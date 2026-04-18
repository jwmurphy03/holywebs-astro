import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, AlertCircle } from "lucide-react";

const industries = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Construction",
  "Power Washing",
  "CPA / Bookkeeping",
  "Other",
];

interface GatedDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  guideTitle: string;
  pdfPath: string;
}

export default function GatedDownloadDialog({
  open,
  onOpenChange,
  guideTitle,
  pdfPath,
}: GatedDownloadDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    industry: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const { postToGHL } = await import("@/lib/ghl");
      await postToGHL({
        name: formData.name,
        email: formData.email,
        businessName: formData.companyName,
        service: formData.industry,
        source: "resource-download",
        resource: guideTitle,
      });

      // Trigger download
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfPath.split("/").pop() || "guide.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setSubmitted(false);
      setError(false);
      setFormData({ name: "", email: "", companyName: "", industry: "" });
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Download className="w-7 h-7 text-primary" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground mb-2">
              Your download has started!
            </DialogTitle>
            <p className="text-muted-foreground text-sm">
              Check your downloads folder. We'll also send a copy to your email.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                Download: {guideTitle}
              </DialogTitle>
              <p className="text-muted-foreground text-sm mt-1">
                Fill out the form below to get your free guide.
              </p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {error && (
                <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Business Name</Label>
                <Input
                  id="companyName"
                  required
                  placeholder="Smith's Plumbing LLC"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(val) => setFormData({ ...formData, industry: val })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <button
                type="submit"
                disabled={submitting || !formData.industry}
                className="btn-primary w-full text-center !py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Processing..." : "Download Free Guide"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                No spam. We respect your privacy.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
