import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3c3c3c] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">BERCERITA</div>
            <p className="text-[#aaa] max-w-md">
              The best English learning platform for Indonesian students
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/about">About Bercerita</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/careers">Careers</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/press">News</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/premium">Bercerita Premium</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/schools">Bercerita for Schools</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/apps">Mobile App</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/faq">FAQ</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                <li><Link className="text-[#aaa] hover:text-white transition-colors" href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#555] mt-8 pt-8 text-[#aaa] text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>© 2024 Bercerita. All Rights Reserved.</div>
            <div className="mt-4 md:mt-0">
              <Link className="text-[#aaa] hover:text-white transition-colors mx-2" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-[#aaa] hover:text-white transition-colors mx-2" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-[#aaa] hover:text-white transition-colors mx-2" href="/cookies">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 