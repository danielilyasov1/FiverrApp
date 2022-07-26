import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'gigs_db'

_createGigs()

export const gigService = {
  query,
  getById,
  remove,
  save,
  getEmptyGig,
  getLabels,
}

const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? '/api/gig'
    : '//localhost:3030/api/gig'

async function query(filterBy) {
  try {
    console.log('filterBy query', filterBy)
    // const entities= 'gigs'

    const gigs = await storageService.query(KEY)
    if (filterBy.category && filterBy.priceBy) {
      const { category, priceBy, title } = filterBy
      const filterd = gigs.filter((gig) => {
        if (title) {
          return (
            gig.category === category &&
            gig.title.includes(title) &&
            gig.price > priceBy.min &&
            gig.price < priceBy.max
          )
        }
        return (
          gig.category === category &&
          gig.price > priceBy.min &&
          gig.price < priceBy.max
        )
      })

      return Promise.resolve(filterd)
    }
    const { title, category } = filterBy
    const regex = new RegExp(title, 'i')
    console.log('ata mefager')
    let filteredGigs
    if (!category) {
      filteredGigs = gigs.filter((gig) => regex.test(gig.title))
      return Promise.resolve(filteredGigs)
    }

    filteredGigs = gigs
      .filter((gig) => regex.test(gig.title))
      .filter((gig) => gig.category === category)

    return Promise.resolve(filteredGigs)
  } catch (err) {
    console.error(err)
  }

  // try {

  //   // const res = await axios.get(BASE_URL, { params: filterBy })
  //   const gigs = await storageService.query(filterBy)
  //   // return res.data
  //   return gigs
  // } catch (err) {
  //   console.error(err)
  // }

  // return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
  // return storageService.query(TOY_KEY)
}

async function getById(gigId) {
  try {
    // const res = await axios.get(BASE_URL + gigId)
    const gig = await storageService.get(KEY, gigId)
    return gig
  } catch (err) {
    console.error(err)
  }

  // return axios.get(BASE_URL + gigId).then((res) => res.data);
  // return storageService.get(KEY, gigId)
}

async function remove(gigId) {
  try {
    // const res = await axios.delete(BASE_URL + gigId)
    const res = await storageService.remove(KEY, gigId)
    return res
  } catch (err) {
    console.error(err)
  }

  // return axios.delete(BASE_URL + gigId).then((res) => res.data);
  // return storageService.remove(KEY, gigId)
}

async function save(gig) {
  try {
    if (gig._id) {
      // const res = await axios.put(BASE_URL + gig._id, gig)
      const res = await storageService.put(KEY, gig)
      return res
    } else {
      // const res = await axios.post(BASE_URL, gig)
      const res = await storageService.post(KEY, gig)
      return res
    }
  } catch (err) {
    console.error(err)
  }

  // if (gig._id) {
  //   return axios.put(BASE_URL + gig._id, gig).then((res) => res.data);
  // } else {
  //   return axios.post(BASE_URL , gig).then((res) => res.data);
  // }

  // if (gig._id) return storageService.put(KEY, gig)
  // return storageService.post(KEY, gig)
}

function getEmptyGig() {
  return {}
}

function getLabels() {
  return labels
}

function _createGigs() {
  let gigs = utilService.loadFromStorage(KEY)
  if (!gigs || !gigs.length) {
    gigs = [
      {
        _id: 'i101',
        category: 'Logo',
        serviceFee: 0.80,
        title: 'I will design 3 modern minimalist logo design',
        price: 10,
        owner: {
          _id: 'u101',
          fullname: 'logoflow',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/72867198f897ad13715dc583607abd25-1646719437960/396247a2-16d7-4e0e-9496-fbb43f978f97.jpg',
          level: 'Level 2 Seller',
          rate: 4.9,
          review: '32k',
          loc: 'India',
          memberSince: 'Dec 2015',
          avgResponceTime: '2 hours',
          lastDelivery: 'about 7 hours',
          about: `
          Hi,
          Mayur here.
          I am a professional graphic designer with an experience of 10+ years. Let my field
          of expertise collaborate with your level of imagination, so together we can create
          an exceptional brand image. Something which creates an impact. Impact which 
          screams for its acknowledgment without you needing to do so. Let us make wonders
          together in this field of designing.
          Keep exploring.
          `,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_thumbnail3_3,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f/do-professional-and-unique-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_thumbnail3_3,q_auto,f_auto/gigs2/22527722/original/acb44ed3100eb7936b852c414f411b588ef2c17e/do-professional-and-unique-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_thumb_ver3,f_jpg/20220614/modern%20minimalist%20logo%20design%202_mto2tc.jpg',
          'https://fiverr-res.cloudinary.com/images/t_delivery_thumb,q_auto,f_auto/attachments/delivery/asset/9e94e938bebe9403f4d16a4219ee46de-1658230277/80031_Dragon%20Master%20Clean_DV_05/do-professional-and-unique-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_delivery_thumb,q_auto,f_auto/attachments/delivery/asset/421e5dd2e40f183670e933465e8df026-1658237798/80039_Knight%20and%20Pawn_Flat_HS_08/do-professional-and-unique-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_delivery_thumb,q_auto,f_auto/attachments/delivery/asset/94dceb766d9675f17d52483556a18ad0-1656066728/79075_Sweet_sour_FLAT_KS_02/do-professional-and-unique-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_delivery_thumb,q_auto,f_auto/attachments/delivery/asset/59eeea83ac86fa8affc7e9d36df281cb-1655190834/78626_Perseus%20Naturkosmetik_FLAT_DT_04/do-professional-and-unique-logo-design.jpg',
        ],
        description: `
        This Gig assures you for the logo designs with minimalism and smoothness

        This Gig is of one of many design kinds we offer. Flat design concepts are one of our 
        fortes. For the logo to be timeless it doesn\’t need to be with complex structures or 
        patterns. It just needs to be simple, memorable and which gives a distinctive essence 
        to your business

        A flat design is the one which defines your identity or your business but doesn\’t get
        in way of your destination for your target audience

        Our minimalistic logo designs will help in representing your company in a unique way. 
        We believe that minimalism is not simple but has unlimited boundaries of its own

        Why me?

        Consistent | Creative | Patient | Adaptive communication | Expert | Learner | Listener

        OUR ARTISTRY INSPIRATION

        We want to give your business a spotlight which will give you a path through which you
        can shine through. Clarity lies within the simplicity of the creations. We will provide
        you with the essentials which will represent the hard work which you have put through
        your brand

        Get a free consultation with us, with just a click of finger. I can\’t wait to get
        connected`,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        more: 'SILKY FLOW 3 LOGOS in JPG & PNG (transparent) + NO Mascots & Complex design',
        orderFeats: [
          '3 concepts included',
          'Logo transparency',
          'Printable file',
          'Vector file',
          'Source file',
        ],
      },
      {
        _id: 'i102',
        category: 'Logo',
        serviceFee: 7.99,
        title: 'I will design an outstanding logo',
        price: 15,
        owner: {
          _id: 'u101',
          fullname: 'ei8htz',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg',
          level: 'Top Rated Seller',
          rate: 4,
          review: '53k',
          loc: 'Indonesia',
          memberSince: 'Oct 2012',
          avgResponceTime: '5 hours',
          lastDelivery: 'about 1 hours',
          about: `
          Experienced, passionate graphic design team specializing in logos, icons, stationery, 
          prints, and branding. Completing thousands ofprojects on Fiverr for a wide variety of 
          clients, we ensure nothing but the utmost professionalism and quality graphics you 
          can find. Satisfaction is guaranteed!

          We look forward to working with you 🙂`,
        },
        daysToMake: 2,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1094285/original/30f75e896954dc0ea9e28a87209a28053bcccc18/design-2-outstanding-logo.png',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/1094285/original/0149d53275d914f681e8685b9e6c263dcc4309ab/design-2-outstanding-logo.png',
          'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20211214/logo-04_nxxckf.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/819a431f0c9f551ac9173310d0b8788c-1657824243/preview%20203/design-2-outstanding-logo.jpg',
        ],
        description: `

        A Team of Talented Graphic Designer with 8+ years of experience in A logo is a 
        customer's first impression of your brand, and it should be unforgettable.
        
        Ei8htz is a team of professional designers experienced in creating hand-crafted 
        outstanding logo designs. We’ve helped thousands of small to big companies around the 
        world making attractive logos that stand out from the crowd. 
        
        We’ll help you create the best logo that can take your business to the
        next level. We guarantee outstanding service for your project.
        
        What makes us strong!
        
        ✔ Leading Fiverr logo design service
        
        ✔ Affordable cost
        
        ✔ Top-notch design and high quality work
        
        ✔ Custom design - made from scratch
        
        ✔ Commit to finish project until satisfaction
        
        ✔ 24/7 support
        
        
        Our expertises: Versatile | Freestyle | Modern | Minimalist | Geometric | 3d | 
                        Hand-drawn | Signature | Vintage | Lettering | Watercolor
        
        Note:
        
        Mascot or illustration is not included in the basic package
        
        Contact us for a special offer:
        
        • $280 BRANDING PACKAGE: logo design + favicon + stationery design + social media kit 
                                 + style guides.
        
        • $150 LOGO ANIMATION.
        
        ORDER NOW!
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        more: 'Lite 2 logo options in JPG + PNG transparent + FREE vector source file in Ai',
        orderFeats: [
          '2 concept included',
          'Logo transparency',
          'Printable file',
          'Vector file',
          'Social media kit',
        ],
      },
      {
        _id: 'i103',
        category: 'Logo',
        serviceFee: 7.99,
        title: 'I will design unique modern versatile flat minimalist business logo',
        price: 20,
        owner: {
          _id: 'u101',
          fullname: 'muska_logo12',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cd7df7ccbadfa2c438aec6863735113e-1620164071845/afde52c3-876d-463e-bf6e-4ee9f20578da.jpg',
          level: 'Level 2 Seller',
          rate: 4.9,
          loc: 'Pakistan',
          memberSince: 'May 2021',
          avgResponceTime: '1 hours',
          lastDelivery: 'about 27 minutes',
          about: `
          As a full time Graphic Designer, I'm offering my creative logo design services on 
          Fiverr. With over many years experience I can produce your logo in any style. I will 
          always ensure you're 100% happy at every stage of the project to come up with an end 
          product which will perfectly identify and represent your company.`,
        },
        daysToMake: 1,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/205043129/original/3e1b7b521d2ac2bdd0e839888e1095fe3c3f4d66/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/4f9605173bed9a21001954d0113d914a-1658647699/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/36df9fbe656de3e335698cee5606c360-1658401602/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c6523fd4ae08dc7df9d4f340885816b2-1658405876/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
        ],
        description: `
        Do you want a helping hand for your new business or brand to stay creative? Or are you 
        not satisfied with your existing logo? Look no further, as you are at the correct place.

        As it is the era of Flat modern minimalist logo. I am in the business of giving your 
        brand a hyper boost, not just a logo.

        Why me?

        More than 5 years of experience in Branding Designing
        Friendly and quick communication
        High resolution printable files
        Expert in modern minimalist logo
        Money back guarantee
        Flexible Source Formats

        Modern Minimalist Logo | Minimal | Professional | Text | Vintage | Badge | Hand drawn | 
        Feminine | Signature | Custom Logo Design

        If you want to know anything more please contact me. I am always here for you.
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        more: '2 logo design: Includes a JPG + PNG',
        orderFeats: [
          '2 concept included',
          'Logo transparency',
          '3D mockup',
          'Social media kit',
        ],
      },
      {
        _id: 'i104',
        category: 'Wordpress',
        serviceFee: 3.99,
        title: 'I will fix complex wordpress issues, fix wordpress errors, fix bug',
        price: 10,
        owner: {
          _id: 'u101',
          fullname: 'webexpert_0',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/07d2f39e1708eaafeea368f0c7938a6b-1644941669596/29d2e723-3f60-47ef-b75a-a9537634e8b1.png',
          level: 'Level 2 Seller',
          rate: 5,
          loc: 'Pakistan',
          memberSince: 'Sept 2021',
          avgResponceTime: '1 hours',
          lastDelivery: 'about 3 hours',
          about: `
          Hi! It's Adil Farid. I am a professional and Senior Website Developer with 4 years of
          working experience in IT agency as a Full Stack Developer. My expertise in Html5, 
          Css3, Sass (Sass + Scss), Less (pre-processor), Bootstrap5, Bulma, JavaScript, jQuery,
          WordPress, PHP, CodeIgniter, Laravel, My SQL, MongoDB...etc. I have vast experience in 
          WordPress, Theme Customization, Custom Functionalities, Theme Responsiveness, 
          Plugin Integration, Web Development and much more... etc.
           `,
        },
        daysToMake: 1,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/143801307/original/182ae507354f6fe0fa021e403461e9b6e40f3a03/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/143801307/original/8164c9f9c0fff64be3842996cabe58ceee7cb9e1/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/143801307/original/3ff3a9d66bd1f9ff6f5a5c4bf770b8b7957cca58/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e9f0e0b70347b7de2934b68bada4a8e3-1658276904/Mortgage%20by%20Matranga%2002/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c4cd6e4322e21031559f7ab5c899a8c1-1658280635/01/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
        ],
        description: `
        IMPORTANT : PLEASE CONTACT ME BEFORE PLACING THE ORDER

        Welcome to my Fiverr's gig "I will fix complex WordPress issues, fix WordPress errors, 
        fix bug". If you are having problems with your WordPress website and want to fix 
        WordPress errors, issues and bug or customize some features, than you are at the right 
        place. You don't look any further!
        
        I'll help you with fix WordPress issues, fix WordPress errors and fix WordPress bug 
        within just 24 hours.
        
        ⭐ What I can do?
        
        ✔️ Error Establishing Database Connection
        ✔️ Fixing WooCommerce errors
        ✔️ Critical Error
        ✔️ Not Sending Emails
        ✔️ Internal Server Error
        ✔️ White/Empty Screen
        ✔️ 404 Not Found Error
        ✔️ Too Many Redirects
        ✔️ WP Customization
        ✔️ Layout issues
        ✔️ Fix Contact form, widgets, sliders
        ✔️ Fix headers and footers
        ✔️ Maximum Execution Time Exceeded
        ✔️ Styling using Custom CSS and JS
        ✔️ 403 Forbidden Error
        ✔️ Improve website security
        ✔️ And Much More...etc

        ⭐ Why me ?
        
        ✔️ Quick & Quality Service
        ✔️ Unlimited Revisions until your Satisfaction
        ✔️ 24/7 Availability
        ✔️ After Order Support
        ✔️ On time Delivery
                
        Looking forward to hearing from you. Thank you so much :)`,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        more: "One small CSS task. (Don't Order me directly without discussing task. Otherwise Order will Cancel).",
        orderFeats: ['2 concepts included', 'Printable file', '3D mockup'],
      },
      {
        _id: 'i105',
        category: 'Wordpress',
        serviceFee: 5.99,
        title: 'I will do wordpress malware removal within 1hour',
        price: 50,
        owner: {
          _id: 'u102',
          fullname: 'malware_hunter5',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/97b7f1ac3c14ffff73598f01d54fc9ed-1601992611040/5a6b5e7c-b510-4497-acc5-b3439de752fc.jpg',
          level: 'Level 2 Seller',
          rate: 5,
          loc: 'Pakistan',
          memberSince: 'Oct 2020',
          avgResponceTime: '1 hour',
          lastDelivery: 'about 13 hours',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music.

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusively on fiverr to rock your world with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/177849864/original/1b52406ee038703a5b3f3fb1ae6a4cccbddfb75a/remove-malware-and-viruses.png',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/177849864/original/c13b7c3ff4b5bb62e1baffa9f4d6f20fe2e13094/remove-malware-and-viruses.png',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/177849864/original/ae0018bb76e4e4e42d9973c93861fbc29e246990/remove-malware-and-viruses.png',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/4f38f7e55c01be0df8ab7df3eb182972-1657921024/12/remove-malware-and-viruses.PNG',
        ],
        description: `
        Hi there ! Thanks for stopping by !!

        A Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, 
        expertise as Logo Maker,You'll get creative & AWESOME logo design for your business.

        ★ Why Us? ★

        - Talented Logo Maker Team
        - Fully custom made, creative, original, UNIQUE and AWESOME designs
        - Professional customer support 24/7
        - High Quality work
        - 100% money back policy if not satisfied

        ★ WHAT DO YOU GET? ★

        ✔ Highly Professional, UNIQUE & High Quality designs
        ✔ UNLIMITED revisions until u r 100% satisfied
        ✔ Fast turn around time 24 to 48 hours only.
        ✔ 100% original & unique vector design from Adobe Illustrator
        ✔ Vector Source Files (scalable without any quality loss)(AI, EPS, PDF) for the final 
          design 
        ✔ PROFESSIONAL Communication & Outstanding Customer Support 
        ✔ Guaranteed High Quality work

        If you have any question, 

        Feel free to★ Contact Me! ★I'll be happy to help !

        Let's get started!
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        more: 'Basic WordPress installation + Theme installation + Setup theme demo + plugins installation.',
        orderFeats: [
          'Functional website',
          '1 page',
          'Design customization',
          '2 plugins/extension',
          'Responsive design',
        ],
      },
      {
        _id: 'i107',
        category: 'Programming',
        serviceFee: 1.99,
        title: 'I will create a useful windows program',
        price: 164,
        owner: {
          _id: 'u107',
          fullname: 'catalin00',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/14306af7997480e7d972f860b09ab5d9-1646949487503/c20b6fc8-5a75-4b59-ba01-199532d2ccd9.png',
          level: 'Top Rated Seller',
          rate: 5,
          loc: 'Romania',
          memberSince: 'Mar 2016',
          avgResponceTime: '5 hours',
          lastDelivery: '1 day',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music. 

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusivelyon fiverr to rock your world 
            with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/32345315/original/9ac58ea3a643ee26365ae84917f934de9ab52c82/create-a-useful-windows-program.png',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/32345315/original/acd753393154cde20acc9b72d968e274cf8cd1d3/create-a-useful-windows-program.jpeg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/32345315/original/ca4b83d2f8ef7b2f2da4da2b6fdb877cd08c4827/create-a-useful-windows-program.png',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/bc306a54ff22d666e16d3fcd543b2efc-1591547072/User%20Guide/create-a-useful-windows-program.pdf',
        ],
        description: `
        Welcome To My Professional Gig:

        Do you want to Create YouTube Channel or Already Have A Channel
        created and Want to Grow and Make your Channel professional,
        so you are at the right place. In this gig, I will create, setup
        your channel. I will also give you tips n tricks because you
        must know all about channel growth. It will help you in the
        future and also give you the lifetime support.

        What I Will Do:

        - Create YouTube Channel
        - Professional Channel
        - SEO (Improve Rankings)
        - Design Channel
        - Setup Channel
        - Organic Promotion
        - Logo, Banner
        - Unlimited Revision
        - Money-Back Guaranteed
        - Short Videos
        And Much More.

        Why Me:

        - 100% Satisfaction
        - 24/7 Support
        - Guide You for Future Channel Growth

        If you have any Questions, Feel Free to ask.
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        orderFeats: [
          '2 concepts included',
          'Logo transparency',
          'Printable file',
          '3D mockup',
        ],
      },
      {
        _id: 'i108',
        category: 'Illustration',
        serviceFee: 0.99,
        title: 'I will draw, modern, flat illustrations, for your business',
        price: 34,
        owner: {
          _id: 'u102',
          fullname: 'yonki_moon',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/97b7f1ac3c14ffff73598f01d54fc9ed-1601992611040/5a6b5e7c-b510-4497-acc5-b3439de752fc.jpg',
          level: 'Level 2 Seller',
          rate: 5,
          loc: 'Pakistan',
          memberSince: 'Oct 2020',
          avgResponceTime: '1 hour',
          lastDelivery: 'about 13 hours',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music. 

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusivelyon fiverr to rock your world 
            with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/210774935/original/0c53947928aedeab18802ea9586985d6a43e3de4/create-digital-illustration-for-web.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/210774935/original/783966fb7560b58c2ed8e9cc2cfab3ad35a95246/create-digital-illustration-for-web.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/210774935/original/759c920bcde8222581109e71b22c8b571cf5c0c5/create-digital-illustration-for-web.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a2df864ea81f6613751a560dc4ee196a-1652254601/house%20cover/create-digital-illustration-for-web.jpg',
        ],
        description: `
        Welcome To My Professional Gig:

        Do you want to Create YouTube Channel or Already Have A Channel
        created and Want to Grow and Make your Channel professional,
        so you are at the right place. In this gig, I will create, setup
        your channel. I will also give you tips n tricks because you
        must know all about channel growth. It will help you in the
        future and also give you the lifetime support.

        What I Will Do:

        - Create YouTube Channel
        - Professional Channel
        - SEO (Improve Rankings)
        - Design Channel
        - Setup Channel
        - Organic Promotion
        - Logo, Banner
        - Unlimited Revision
        - Money-Back Guaranteed
        - Short Videos
        And Much More.

        Why Me:

        - 100% Satisfaction
        - 24/7 Support
        - Guide You for Future Channel Growth

        If you have any Questions, Feel Free to ask.
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        orderFeats: [
          '2 concepts included',
          'Logo transparency',
          '3D mockup',
          'Vector file',
        ],
      },
    ]

    utilService.saveToStorage(KEY, gigs)
  }
  return gigs
}

// function _createGig(name, price) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels: ['Doll', 'Battery Powered', 'Baby'],
//     createdAt: Date.now(),
//     inStock: true,
//     reviews: [
//       'review 1 best 1',
//       'review 2 almost 1',
//       'review 3 far from 1',
//     ],
//   }
// }
