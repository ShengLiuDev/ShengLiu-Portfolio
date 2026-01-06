import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileText, ExternalLink, Download } from "lucide-react";

const ResumePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumePath = `${import.meta.env.BASE_URL}Johnny-Liu-Resume.pdf`;

  return (
    <div className="flex flex-col items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="group relative w-full max-w-sm aspect-[8.5/11] rounded-xl overflow-hidden card-glass hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            {/* Document preview container */}
            <div className="absolute inset-0 bg-card flex flex-col items-center justify-center p-6">
              <FileText className="w-16 h-16 text-muted-foreground mb-4" />
              <span className="font-display font-semibold text-lg text-foreground">
                Johnny Liu
              </span>
              <span className="text-sm text-muted-foreground mt-1">Resume</span>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Click to View
                </span>
              </div>
            </div>

            {/* Decorative corner fold */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-muted">
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[32px] border-l-card border-b-[32px] border-b-transparent" />
            </div>
          </button>
        </DialogTrigger>

        <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
              <h3 className="font-display font-semibold text-lg">Resume</h3>
              <a
                href={resumePath}
                download
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 bg-muted">
              <iframe
                src={resumePath}
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        Click to view full resume
      </p>
    </div>
  );
};

export default ResumePreview;
