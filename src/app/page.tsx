"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Calendar, ChefHat, Clock, Crown, Heart, Instagram, Facebook, Leaf, MessageSquare, Sparkles, Star, TrendingUp, Users, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Plaza"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Culinary Excellence at Plaza"
          description="Where fine dining meets exceptional service in an atmosphere of elegance and warmth. Join us for an unforgettable culinary journey."
          tag="Fine Dining"
          tagIcon={Utensils}
          buttons={[
            { text: "Reserve Table", href: "contact" },
            { text: "View Menu", href: "product" }
          ]}
          imageSrc="https://pixabay.com/get/gb4747ca8f707073e09afcdc1bf8ae7b2118a0f9586696eaeffc15cafea691424816b91e606288296bd1ba874b33677be3bf02061b375f8560ea3ee8ddfaeaff8_1280.jpg"
          imageAlt="Elegant Plaza restaurant interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded with a passion for culinary excellence, Plaza has been serving exceptional cuisine in an atmosphere of refined elegance for over two decades."
          tag="Heritage"
          tagIcon={Crown}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Award-Winning Cuisine",
              description: "Our chef-crafted dishes have earned recognition from culinary experts nationwide",
              icon: Award
            },
            {
              title: "Premium Ingredients",
              description: "We source only the finest, freshest ingredients from local farms and trusted suppliers",
              icon: Leaf
            },
            {
              title: "Exceptional Service",
              description: "Our dedicated staff ensures every guest receives personalized, attentive service",
              icon: Heart
            }
          ]}
          imageSrc="https://pixabay.com/get/g56ec6ab7c9bb826d4cd89db32c5453d6f5deb50424142c7e85915303aa0a85fd6c3d17044c19ca36d271b20d13b0e55dfdc56cb327c691e16413abc6bb953b63_1280.jpg"
          imageAlt="Head chef preparing signature dish"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSix
          title="What Makes Plaza Special"
          description="Discover the elements that create our unique dining experience"
          tag="Experience"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Culinary Artistry",
              description: "Our master chefs create innovative dishes that blend traditional techniques with modern creativity, resulting in flavors that captivate and delight.",
              imageSrc: "https://pixabay.com/get/g56ec6ab7c9bb826d4cd89db32c5453d6f5deb50424142c7e85915303aa0a85fd6c3d17044c19ca36d271b20d13b0e55dfdc56cb327c691e16413abc6bb953b63_1280.jpg"
            },
            {
              id: 2,
              title: "Intimate Atmosphere",
              description: "Warm lighting, elegant décor, and carefully curated music create the perfect ambiance for romantic dinners and special celebrations.",
              imageSrc: "https://pixabay.com/get/g417c8417d6b49b3d69544d3c76ce28b80b0b056fda529333eadaf6cf84142a299de1a0a0049bfde72c3fb1cfa5444fc9ec358d6ebddf06fa69f4c98eda2f1c04_1280.jpg"
            },
            {
              id: 3,
              title: "Impeccable Service",
              description: "Our professionally trained staff anticipates your needs and ensures every moment of your dining experience exceeds expectations.",
              imageSrc: "https://pixabay.com/get/ge7fd7fc7c3fd189e8fd96cf339180ffc6965b9f2c7a3868dd0de50ce1110679cf24d13e1d9098bd2db12c83c7c920413099780d839f139c8f1773e844ba75bf3_1280.jpg"
            },
            {
              id: 4,
              title: "Fresh Ingredients",
              description: "Daily deliveries of seasonal produce and premium proteins ensure every dish is prepared with the finest, freshest ingredients available.",
              imageSrc: "https://pixabay.com/get/g9fe048d1c1ba1688b81c153dc8ec4487f1e6cf1bcd2fab6b648de5f55504b4a5fd1389a2c98e5e260f50e33778456d743737034ba97437576255282064a36e13_1280.jpg"
            },
            {
              id: 5,
              title: "Curated Wine Selection",
              description: "Our sommelier has carefully selected wines from renowned vineyards worldwide to perfectly complement our culinary offerings.",
              imageSrc: "https://pixabay.com/get/ge462f4953521b18eb02ccd50a57f54b140a48acb66061552b9840cfa4b31f92a863f503248ba7fd7f7b53393b99277b0604780cc72b57f4e147a7186ebbc1321_1280.jpg"
            },
            {
              id: 6,
              title: "Outdoor Terrace",
              description: "Enjoy al fresco dining on our beautiful terrace, featuring garden views and the perfect setting for memorable evenings.",
              imageSrc: "https://pixabay.com/get/g62e9c70fe1a755a00a8e2d45e87d9061cfba6a8563c85c2234444f0877dda9a3ad70a961ca5a19e6645f6d5390959d4eb2618a6bfb52e8577edd47e930883425_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Signature Dishes"
          description="Explore our chef's carefully crafted signature dishes"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "pasta",
              name: "Truffle Pasta",
              price: "$34",
              imageSrc: "https://pixabay.com/get/g3425bef899e8c59a77a204c69a55cb8bc78b604d30a30dce4a47c87aeac5a1723d506ef736f6b3a4791f084d92747f4555cc3698744766ebd88b0fdce23981ed_1280.jpg",
              imageAlt: "Handmade pasta with truffle sauce"
            },
            {
              id: "steak",
              name: "Wagyu Ribeye",
              price: "$65",
              imageSrc: "https://pixabay.com/get/ge1aba805e2b1bcbdd283d552486dbc6dd4912894346bc3b300c294ff947e5c51d50c8c2b429668a32952788332944ff56b7c1af5eb0781c7e387025d49db2703_1280.jpg",
              imageAlt: "Premium Wagyu ribeye steak"
            },
            {
              id: "seafood",
              name: "Lobster Thermidor",
              price: "$48",
              imageSrc: "https://pixabay.com/get/gd4d2764835247e3d46dbb74ad90a3f73a3c38315efbfcee6c2b6ed45acf2d491bea5a326b68ded50834ddbc8cb80d5844793bc21ce29842d5ad8ed83fa665c05_1280.jpg",
              imageAlt: "Classic lobster thermidor"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Dining Experiences"
          description="Choose the perfect dining experience for your occasion"
          tag="Reservations"
          tagIcon={Calendar}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "lunch",
              badge: "Popular Choice",
              badgeIcon: Clock,
              price: "$45",
              subtitle: "Perfect for business lunches",
              buttons: [
                { text: "Book Lunch", href: "contact" },
                { text: "View Menu", href: "product" }
              ],
              features: [
                "2-course prix fixe menu",
                "Complimentary appetizer",
                "Premium wine selection",
                "Reserved seating"
              ]
            },
            {
              id: "dinner",
              badge: "Chef's Recommendation",
              badgeIcon: Sparkles,
              price: "$85",
              subtitle: "An unforgettable evening",
              buttons: [
                { text: "Reserve Dinner", href: "contact" },
                { text: "Special Menu", href: "product" }
              ],
              features: [
                "5-course tasting menu",
                "Wine pairing included",
                "Amuse-bouche service",
                "Personalized service",
                "Dessert selection"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Plaza by the Numbers"
          description="Our commitment to excellence reflected in achievements"
          tag="Recognition"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "20+",
              description: "Years of culinary excellence"
            },
            {
              id: "2",
              value: "50K+",
              description: "Satisfied guests served"
            },
            {
              id: "3",
              value: "15",
              description: "Award-winning dishes"
            },
            {
              id: "4",
              value: "4.9★",
              description: "Average customer rating"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Culinary Team"
          description="The talented professionals who create your exceptional dining experience"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Chef Isabella Rodriguez",
              role: "Executive Chef",
              imageSrc: "https://pixabay.com/get/g56ec6ab7c9bb826d4cd89db32c5453d6f5deb50424142c7e85915303aa0a85fd6c3d17044c19ca36d271b20d13b0e55dfdc56cb327c691e16413abc6bb953b63_1280.jpg",
              imageAlt: "Executive Chef Isabella Rodriguez"
            },
            {
              id: "2",
              name: "Marcus Thompson",
              role: "Sommelier",
              imageSrc: "https://pixabay.com/get/ge462f4953521b18eb02ccd50a57f54b140a48acb66061552b9840cfa4b31f92a863f503248ba7fd7f7b53393b99277b0604780cc72b57f4e147a7186ebbc1321_1280.jpg",
              imageAlt: "Sommelier Marcus Thompson"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real experiences from our valued customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Williams",
              role: "Food Critic",
              company: "Culinary Magazine",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7bf3a58586280f8a75db49cc5987c225290969f1e77fa5315a3b700341d1f216bdb454cecc6ec1875926714ef5643aebe3d1d14da6b71e0780861fa8918d1e48_1280.jpg",
              imageAlt: "Sarah Williams dining at Plaza"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              company: "Corporate Dining",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g868340889d3fe4859c7d90104b6be25fcf23b9d0661de99f326d72a6da63509eaa1c47d1c4ebed2606896634da232f0955fb8f882f2730eb7fb8f0c05a553a07_1280.jpg",
              imageAlt: "Michael Chen at business dinner"
            },
            {
              id: "3",
              name: "Emma Johnson",
              role: "Anniversary Celebration",
              company: "Special Occasions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g86b6eea48adf4f549057741ce94cdef05d714174cfeb435f4b38ccbd3ee28fa77d57c3c8c336c5666261d566c0a64b552c9720c6332a4b4fdbe1365be50c000a_1280.jpg",
              imageAlt: "Emma Johnson celebrating anniversary"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Regular Guest",
              company: "Food Enthusiast",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g142caea150f03e22e865b7696a2517fe1b4d44bea06a4cbed56f909ad19f13d453d20d9ed8f24e29f700c97a5f1e9b52b3fd93e25ddeffd3ef065da05e6877d3_1280.jpg",
              imageAlt: "David Martinez enjoying dinner"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured On"
          description="Trusted by leading dining platforms and review sites"
          tag="Recognition"
          tagIcon={Star}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g56749fc403d90f6213dafff414845a43780f4991e6c3a383f0fc1d45ee19ee914c31de05597f394d3a0209a91e31d6febf57e730bb13345276320ca5322f297d_1280.jpg",
            "https://pixabay.com/get/g540a5a14cd0dfdd4eac6c42ed2575bf72e20a2e828fdda3d52a3abee46c9d84d1b444b7f93c1d7cee1b6b1c947ad218ba3b3d3b96aefebcdde7c0a1b849e6518_1280.jpg",
            "https://pixabay.com/get/g211e938403d1787ed253b0533a413fcff6bac864df81cc6c8d2e969a998474d4ac04b38c4e7c3bf270cb4799b54ffde55979f56b16c89e2fb047b17e8ad1e31f_1280.jpg",
            "https://pixabay.com/get/g9691f7cf399c83d3f75357eac643ebf3ac43399b2784bf6d53d4c756fad1f33c6ba32bc9a51dfa16e8614a00e325d1c5e9b64fb5e6649aa90484a0f5aea4c019_1280.jpg",
            "https://pixabay.com/get/gc50d0a779ed5c133995fffe63f2d21ccae487b0b204e8e3beddb29ca3cc04ac2d80df01939116ccf20a48d9369fab184dbcd77f2d6391cae637699d057ba22f7_1280.jpg",
            "https://pixabay.com/get/ga2635ebb54049bf9a953361cb24ddcc652b9bdb9a8f888ed3b38ad508242c63e8fbe73a62bd5caf4c16a553fdcb58811f6b5454608315d75506387aa772c0b52_1280.jpg",
            "https://pixabay.com/get/ga866be50ebde9664efd145db882d8ae382eb2ee2c098ab679a33978654917186f3775bf2cd430f8e83234a0766bfe281394326402633082a1a85863810ac2ad3_1280.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Contact us to make a reservation or inquire about private dining options"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary restrictions...",
            rows: 4,
            required: false
          }}
          imageSrc="https://pixabay.com/get/ga1a9055c7e905ab2f819bd698f0b3f4b2444108039e53eb516580aea711ff9a1c60a81b32ab28236945b2b9d93a955ae5835f50c2544da49bcf96483d46a75f3_1280.jpg"
          imageAlt="Elegant Plaza restaurant dining room"
          mediaPosition="right"
          buttonText="Submit Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Plaza"
          copyrightText="© 2025 Plaza Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "product" },
                { label: "Private Dining", href: "contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Gift Cards", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/plazarestaurant",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/plazarestaurant",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}