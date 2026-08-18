import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Yigit Eren Dogan. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart size={16} className="text-rose-500 fill-rose-500" /> and code
          </p>
        </div>
      </div>
    </footer>
  );
}
