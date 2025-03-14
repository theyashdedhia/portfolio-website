
import SocialLinks from "./SocialLinks";
import data from "@/data.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-700 mb-6 max-w-md">
            If you're looking to create amazing digital products, contact me.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium w-20">Email:</span>
                <a href={`mailto:${data.personalInfo.email}`} className="text-primary hover:underline">
                  {data.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-20">Location:</span>
                <span className="text-gray-700">{data.personalInfo.location}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <SocialLinks size={22} />
            </div>
          </div>
        </div>
        
        <div className="section-divider mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {currentYear} {data.personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with 
            <span className="text-red-500 mx-1">♥</span>
            by Myself
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
