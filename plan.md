# ET Auto Švara - Landing Page Implementation Plan

## Brand Analysis from Banner

### Visual Identity

- **Primary Colors**: Deep black/charcoal (#1a1a1a) and vibrant red (#dc2626)
- **Typography**: Modern, bold sans-serif fonts (similar to the "ET AUTO" and "ŠVARA" styling)
- **Style**: Professional, automotive-focused, high-contrast design
- **Imagery**: Premium car focus (BMW shown), professional automotive aesthetic

### Brand Messaging (from banner)

- **Services Listed**:
  - Vidaus cheminis salono valymas (Interior chemical cleaning)
  - Kėbulo poliravimas (Body polishing)
  - Žibintų poliravimas (Headlight polishing)
  - Keraminių dangų padengimas (Ceramic coating application)
- **Contact**: +370 806 47 967
- **Social**: Facebook presence indicated

## Technical Implementation Plan

### 1. Tech Stack Setup

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4 (already configured)
- **Performance**:
  - Next.js Image optimization
  - Font optimization with next/font
  - Lazy loading for images
  - Minification and compression

### 2. SEO Optimization Strategy

- **Meta Tags**: Complete OpenGraph, Twitter Cards, structured data
- **Schema Markup**: LocalBusiness, Service, Organization schemas
- **Lithuanian SEO**:
  - Proper hreflang tags
  - Lithuanian keywords optimization
  - Local business schema with Lithuanian address
- **Performance**: Target 90+ Lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliance

### 3. Page Structure & Sections

#### A. Sticky Navigation Menu

- **Design**: Transparent initially, solid black on scroll
- **Items**: Pagrindinis | Paslaugos | Kodėl mes | Prieš/Po | Atsiliepimai | Kontaktai
- **Mobile**: Hamburger menu with smooth animations
- **CTA**: Prominent phone number button

#### B. Hero Section

- **Layout**: Full-screen with background image/video
- **Content**:
  - Main headline: "Profesionalus automobilio valymas"
  - Subheadline: Service benefits
  - Primary CTA: "Skambinti dabar" (+370 806 47 967)
  - Secondary CTA: "Sužinoti daugiau"
- **Visual**: High-quality car cleaning imagery
- **Animation**: Subtle parallax or fade-in effects

#### C. Services/Prices Section

- **Layout**: Grid layout with service cards
- **Services** (updated pricing):
  1. **Automobilio vaškavimas**
     - Kaina nuo 80 € už projektą
  2. **Žibintų poliravimas**
     - Kaina nuo 25 € už vnt.
  3. **Nano dangos dengimas**
     - Kaina nuo 200 € už projektą
  4. **Automobilio kėbulo poliravimas**
     - Kaina nuo 250 € už projektą
  5. **Interjero bei kitų blizgių detalių poliravimas**
     - Kaina nuo 35 € už vnt.
  6. **Hibridinių/nano/keramikinių dangų aplikavimas**
     - Kaina nuo 250 € už projektą
  7. **Cheminis interjero valymas**
     - Kaina nuo 150 € už projektą
  8. **Detalus išorės valymas ir komplektas**
     - Kaina nuo 50 € už projektą
  9. **Kėbulo dengimas apsaugine PPF plėvele**
     - Kaina nuo 500 € už projektą
  10. **Meninis lyginimas**
      - Kaina nuo 30 € už vnt.
- **Design**: Cards with hover effects, clear pricing
- **CTA**: "Užsisakyti" button for each service

#### D. Why Choose Us Section

- **Content**:
  - Profesionalūs specialistai
  - Kokybės garantija
  - Modernūs įrengimai
  - Greitas aptarnavimas
  - Konkurencingos kainos
- **Layout**: Icon + text blocks or alternating content
- **Visual**: Process photos, team photos, equipment

#### E. Before/After Gallery Section

- **Content**:
  - High-quality before/after image pairs
  - Service-specific transformations
  - Interactive slider or comparison tool
  - Brief descriptions of work performed
- **Layout**:
  - Masonry or grid layout
  - Image comparison sliders
  - Filter by service type
- **Visual Impact**: Showcase dramatic improvements

#### F. Happy Customers Section

- **Content**:
  - Customer testimonials in Lithuanian
  - Star ratings
  - Customer photos (with permission)
  - Service satisfaction stories
- **Layout**: Carousel or grid layout
- **Social Proof**: Facebook reviews integration if possible

#### G. Contact Section

- **Information**:
  - Phone: +370 6 06 47 967 (prominent)
  - Address: Saulėtoji g. 8, Ližiškės, Vilnius
  - Working hours: I-V 9:00 - 18:00, VI 10:00 - 15:00
  - Facebook link
- **Features**:
  - Contact form
  - Google Maps integration
  - Quick booking form
- **CTA**: Multiple contact options

### 4. Design System

#### Color Palette

- **Primary**: #1a1a1a (Deep black/charcoal)
- **Accent**: #dc2626 (Vibrant red)
- **Background**: #ffffff (White)
- **Text**: #171717 (Dark gray)
- **Secondary**: #f3f4f6 (Light gray for sections)

#### Typography

- **Primary Font**: Inter or similar modern sans-serif
- **Headings**: Bold weights (700-800)
- **Body**: Regular (400) and medium (500)
- **Sizes**: Responsive scale (mobile-first)

#### Components

- **Buttons**: Red primary, black secondary, hover effects
- **Cards**: Subtle shadows, rounded corners
- **Forms**: Clean, accessible styling
- **Icons**: Consistent icon library (Heroicons or similar)

### 5. Performance Optimization

#### Images

- **Format**: WebP with fallbacks
- **Optimization**: Next.js Image component
- **Lazy Loading**: Below-the-fold content
- **Sizes**: Responsive images with proper sizing

#### Code Optimization

- **Bundle Splitting**: Dynamic imports where appropriate
- **CSS**: Purged unused styles
- **JavaScript**: Minimal client-side JS
- **Caching**: Proper cache headers

#### Core Web Vitals

- **LCP**: < 2.5s (optimized images, fonts)
- **FID**: < 100ms (minimal JS)
- **CLS**: < 0.1 (proper image dimensions)

### 6. Responsive Design

#### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

#### Mobile-First Approach

- Touch-friendly buttons (44px minimum)
- Readable text sizes
- Simplified navigation
- Optimized images for mobile

### 7. Call-to-Action Strategy

#### Primary CTAs

- **Phone Number**: Always visible, clickable on mobile
- **Book Now**: Prominent buttons throughout
- **Contact Form**: Easy access

#### Secondary CTAs

- **Learn More**: For detailed information
- **View Gallery**: Showcase work quality
- **Social Media**: Build community

### 8. Content Strategy (Lithuanian)

#### Key Messages

- **Trust**: "Patikimas partneris jūsų automobilio priežiūrai"
- **Quality**: "Kokybė, kuri matoma"
- **Convenience**: "Greitas ir patogus aptarnavimas"

#### SEO Keywords

- "automobilio valymas"
- "cheminis salono valymas"
- "kėbulo poliravimas"
- "žibintų poliravimas"
- "keraminės dangos"
- Local area keywords

### 9. Technical Requirements

#### Dependencies to Add

- **Fonts**: @next/font for Google Fonts
- **Icons**: @heroicons/react
- **Animations**: framer-motion (optional)
- **Forms**: react-hook-form + validation
- **Analytics**: Google Analytics/Tag Manager

#### File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── BeforeAfter.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ImageComparison.tsx
│       └── ContactForm.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── components.css
```

### 10. Development Phases

#### Phase 1: Foundation

- Setup design system and components
- Implement responsive layout
- Create basic sections structure

#### Phase 2: Content & Styling

- Add all content in Lithuanian
- Implement brand styling
- Add animations and interactions

#### Phase 3: Optimization

- SEO implementation
- Performance optimization
- Accessibility improvements

#### Phase 4: Testing & Launch

- Cross-browser testing
- Mobile testing
- Performance auditing
- Final optimizations

### 11. Success Metrics

#### Technical

- **Lighthouse Score**: 90+ in all categories
- **Core Web Vitals**: All green
- **Accessibility**: WCAG 2.1 AA compliant

#### Business

- **Call-to-Action Clicks**: Track phone clicks, form submissions
- **User Engagement**: Time on page, scroll depth
- **Mobile Usage**: Responsive design effectiveness

### 12. Future Enhancements

#### Potential Additions

- **Online Booking System**: Appointment scheduling
- **Gallery Expansion**: More before/after photos
- **Blog Section**: Car care tips
- **Multiple Languages**: English version
- **Customer Portal**: Service history tracking

This plan provides a comprehensive roadmap for creating a high-performance, SEO-optimized landing page that matches the brand identity and maximizes conversions for ET Auto Švara car cleaning services.

## Implementation Timeline & Tasks

### Phase 1: Foundation Setup (Day 1)

#### Task 1.1: Project Dependencies & Configuration

- [ ] Install required dependencies (@heroicons/react, react-hook-form, framer-motion)
- [ ] Configure Google Fonts (Inter) with next/font
- [ ] Update Tailwind CSS configuration with brand colors
- [ ] Set up utility functions in lib/utils.ts
- [ ] Create base component structure

#### Task 1.2: Design System Implementation

- [ ] Create UI components (Button, Card, ImageComparison)
- [ ] Implement color palette and typography system
- [ ] Set up responsive breakpoints
- [ ] Create reusable styling patterns

#### Task 1.3: Basic Layout Structure

- [ ] Update layout.tsx with proper meta tags and fonts
- [ ] Create main page structure with all sections
- [ ] Implement responsive grid system
- [ ] Set up smooth scrolling navigation

### Phase 2: Core Components Development (Day 2)

#### Task 2.1: Header & Navigation

- [ ] Create Header.tsx with sticky navigation
- [ ] Implement hamburger menu for mobile
- [ ] Add scroll-based transparency effects
- [ ] Integrate phone number CTA button

#### Task 2.2: Hero Section

- [ ] Create Hero.tsx with full-screen layout
- [ ] Add background image optimization
- [ ] Implement primary and secondary CTAs
- [ ] Add subtle animations (fade-in effects)

#### Task 2.3: Services Section

- [ ] Create Services.tsx with grid layout
- [ ] Implement service cards with all 10 services
- [ ] Add hover effects and pricing display
- [ ] Create "Užsisakyti" CTA buttons

### Phase 3: Content Sections (Day 3)

#### Task 3.1: Why Choose Us Section

- [ ] Create WhyUs.tsx component
- [ ] Implement icon + text block layout
- [ ] Add 5 key benefits with descriptions
- [ ] Create alternating content layout

#### Task 3.2: Before/After Gallery

- [ ] Create BeforeAfter.tsx component
- [ ] Implement ImageComparison.tsx UI component
- [ ] Add interactive slider functionality
- [ ] Create service filter system
- [ ] Set up masonry/grid layout

#### Task 3.3: Customer Testimonials

- [ ] Create Testimonials.tsx component
- [ ] Implement carousel layout
- [ ] Add star ratings display
- [ ] Create testimonial cards with customer info

### Phase 4: Contact & Forms (Day 4)

#### Task 4.1: Contact Section

- [ ] Create Contact.tsx component
- [ ] Add contact information display
- [ ] Implement Google Maps integration
- [ ] Create working hours display

#### Task 4.2: Contact Form

- [ ] Create ContactForm.tsx with react-hook-form
- [ ] Add form validation
- [ ] Implement form submission handling
- [ ] Add success/error states

#### Task 4.3: Quick Booking Features

- [ ] Add phone click-to-call functionality
- [ ] Create quick booking form
- [ ] Implement form analytics tracking

### Phase 5: SEO & Performance Optimization (Day 5)

#### Task 5.1: SEO Implementation

- [ ] Add complete meta tags (OpenGraph, Twitter Cards)
- [ ] Implement structured data (LocalBusiness schema)
- [ ] Add Lithuanian hreflang tags
- [ ] Create sitemap.xml
- [ ] Optimize for Lithuanian keywords

#### Task 5.2: Performance Optimization

- [ ] Optimize all images (WebP format, proper sizing)
- [ ] Implement lazy loading for below-fold content
- [ ] Add proper caching headers
- [ ] Minimize JavaScript bundle size
- [ ] Optimize CSS delivery

#### Task 5.3: Accessibility & Core Web Vitals

- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Fix any accessibility issues
- [ ] Optimize for Core Web Vitals (LCP, FID, CLS)
- [ ] Add proper alt texts and ARIA labels

### Phase 6: Content & Styling Polish (Day 6)

#### Task 6.1: Content Integration

- [ ] Add all Lithuanian content
- [ ] Implement proper typography hierarchy
- [ ] Add brand-consistent styling
- [ ] Create smooth transitions and animations

#### Task 6.2: Mobile Optimization

- [ ] Test and optimize mobile experience
- [ ] Ensure touch-friendly buttons (44px minimum)
- [ ] Optimize mobile navigation
- [ ] Test on various device sizes

#### Task 6.3: Cross-browser Testing

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Fix any browser-specific issues
- [ ] Ensure consistent experience across browsers

### Phase 7: Final Testing & Launch Preparation (Day 7)

#### Task 7.1: Performance Auditing

- [ ] Run Lighthouse audits (target 90+ scores)
- [ ] Test Core Web Vitals
- [ ] Optimize any performance bottlenecks
- [ ] Verify mobile performance

#### Task 7.2: Analytics & Tracking

- [ ] Set up Google Analytics/Tag Manager
- [ ] Implement conversion tracking
- [ ] Add phone click tracking
- [ ] Set up form submission tracking

#### Task 7.3: Final Quality Assurance

- [ ] Test all CTAs and forms
- [ ] Verify all links and navigation
- [ ] Check responsive design on all breakpoints
- [ ] Proofread all Lithuanian content
- [ ] Test contact form functionality

### Phase 8: Launch & Post-Launch (Day 8)

#### Task 8.1: Deployment

- [ ] Deploy to production environment
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Test production deployment

#### Task 8.2: Post-Launch Monitoring

- [ ] Monitor Core Web Vitals
- [ ] Check analytics setup
- [ ] Monitor form submissions
- [ ] Track conversion rates

#### Task 8.3: Documentation & Handover

- [ ] Create maintenance documentation
- [ ] Provide content update guidelines
- [ ] Set up monitoring alerts
- [ ] Create backup procedures

## Daily Implementation Schedule

### Day 1: Foundation (4-6 hours)

- Morning: Dependencies & configuration
- Afternoon: Design system & basic layout

### Day 2: Core Components (6-8 hours)

- Morning: Header & navigation
- Afternoon: Hero & services sections

### Day 3: Content Sections (6-8 hours)

- Morning: Why us & before/after gallery
- Afternoon: Customer testimonials

### Day 4: Contact & Forms (4-6 hours)

- Morning: Contact section & forms
- Afternoon: Booking functionality

### Day 5: SEO & Performance (6-8 hours)

- Morning: SEO implementation
- Afternoon: Performance optimization

### Day 6: Polish & Mobile (4-6 hours)

- Morning: Content integration & styling
- Afternoon: Mobile optimization & testing

### Day 7: Testing & Analytics (4-6 hours)

- Morning: Performance auditing
- Afternoon: Analytics & QA

### Day 8: Launch (2-4 hours)

- Morning: Deployment
- Afternoon: Monitoring & documentation

## Success Checkpoints

### After Day 2: ✅ Basic Structure Complete

- All sections visible and responsive
- Navigation working
- Basic styling applied

### After Day 4: ✅ Full Functionality

- All components working
- Forms functional
- Content integrated

### After Day 6: ✅ Production Ready

- Performance optimized
- SEO implemented
- Mobile optimized

### After Day 8: ✅ Live & Monitored

- Successfully deployed
- Analytics tracking
- Performance monitoring active

This timeline ensures systematic development with clear milestones and quality checkpoints throughout the implementation process.
