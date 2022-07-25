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
    // const entities= 'gigs'

    const gigs = await storageService.query(KEY)

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
        title: 'I will do superb, unique and modern business logo design',
        price: 12,
        owner: {
          _id: 'u101',
          fullname: 'Dudu Da',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg',
          level: 'basic/premium',
          rate: 4,
          loc: 'India',
          memberSince: 'Jun 2014',
          avgResponceTime: '2 hours',
          lastDelivery: 'about 3 hours',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music.

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusively on fiverr to rock your world 
            with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3171448/original/a41a38f3733bb97279a49d1449f7337dece50693.jpg',
          'https://fiverr-res.cloudinary.com/video/upload/so_5.180033,t_gig_cards_web/vnbeuijy2rngotjzyvp2.png',
          'https://fiverr-res.cloudinary.com/video/upload/so_5.180033,t_gig_cards_web/vnbeuijy2rngotjzyvp2.png',
          'https://fiverr-res.cloudinary.com/video/upload/so_5.180033,t_gig_cards_web/vnbeuijy2rngotjzyvp2.png',
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/136496151/original/f3bea738c2ca40f82dec1d156fcb95f0e452c973.jpg',
        ],
        description: `
        hi welcome to my gig..

        If you are looking for an amazing custom logo design with vintage, 
        classic, retro, engraving style, hand drawn style for your brand 
        project or business then I am ready to help you with ORIGINAL work.
        
        - My work is always ORIGINAL!
        - Don't use stock art or templates!
        - Do not reuse works that have been purchased by the client.
        - Real quality, using original work in the portfolio. No fake samples.
        - Quick turnaround.
        - 100% money back guarantee if you're not satisfied! 
      
        Thank you so much!
        
        Have a great day`,
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
        _id: 'i102',
        category: 'Wordpress',
        title: 'I will design your logo',
        price: 12,
        owner: {
          _id: 'u101',
          fullname: 'Dudu Da',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg',
          level: 'basic/premium',
          rate: 4,
          loc: 'India',
          memberSince: 'Jun 2014',
          avgResponceTime: '2 hours',
          lastDelivery: 'about 3 hours',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music. 

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusively on fiverr to rock your world
            with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116971341/original/609e515ad8fb3f361fcd5c7de44544d56815e0af.png',
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263784167/original/df20da13ef7bddf0ec6f7d12ab615ed62d879ff2.jpg',
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/116971341/original/fbd666528b27171dc8d52a949a8c36144b4211ad.png',
        ],
        description: `
        Hi there ! Thanks for stopping by !!

        A Team of Talented Graphic Designer with 8+ years of experience in 
        Graphic Industry, expertise as Logo Maker,You'll get creative & 
        AWESOME logo design for your business.

        ★ Why Us? ★

        - Talented Logo Maker Team
        - Fully custom made, creative, original, UNIQUE and AWESOME
          designs
        - Professional customer support 24/7
        - High Quality work
        - 100% money back policy if not satisfied

        ★ WHAT DO YOU GET? ★

        ✔ Highly Professional, UNIQUE & High Quality designs

        ✔ UNLIMITED revisions until u r 100% satisfied

        ✔ Fast turn around time 24 to 48 hours only.

        ✔ 100% original & unique vector design from Adobe Illustrator

        ✔ Vector Source Files (scalable without any quality loss)
          (AI, EPS, PDF) for the final design 
        
        ✔ PROFESSIONAL Communication & Outstanding Customer Support 
        
        ✔ Guaranteed High Quality work


        If you have any question, 

        Feel free to★ Contact Me! ★I'll be happy to help !


        Let's get started!
        `,
        tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
        likedByUsers: ['mini-user'],
        orderFeats: [
          '1 concept included',
          'Logo transparency',
          'Printable file',
          'Social media kit',
        ],
      },
      {
        _id: 'i103',
        category: 'VoiceOver',
        title: 'I will design your logo',
        price: 12,
        owner: {
          _id: 'u101',
          fullname: 'Dudu Da',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d366617946e54cbc9aa114f27259e3ef-1552848300306/3c155f72-15c9-47d0-8f68-b75a519a7999.jpg',
          level: 'basic/premium',
          rate: 4,
          loc: 'India',
          memberSince: 'Jun 2014',
          avgResponceTime: '2 hours',
          lastDelivery: 'about 3 hours',
          about: `
            Hello! My name is VD. 

            I am a connoisseur of art and music. 

            I love being around nature and my pets. 

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusively on fiverr to rock your world 
            with our designing skills.

            Come and experience it for yourself!`,
        },
        daysToMake: 3,
        imgs: [
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123756949/original/485741b4d2dfd5727cde43edeae7946e1779d69d.jpg',
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/123756949/original/7fe3439d117c631119a75788d38e953d0f2b6fb0.jpg',
          'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/7686e433debd21405b14fc435f3ad664-1658178919/upwood-01.jpg',
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
          '1 concept included',
          'Logo transparency',
          'Printable file',
          'Social media kit',
        ],
      },
      {
        _id: 'i104',
        category: 'Logo',
        title: 'I will do professional minimalist logo design',
        price: 40,
        owner: {
          _id: 'u101',
          fullname: 'jackiebalboa1',
          imgUrl:
            'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5f51f3fb29a56b4a4f692ae6b900bacf-1579009817378/e657cbc7-93e6-4869-a7c5-694251cd559e.JPG',
          level: 'Level 2 Seller',
          rate: 4,
          loc: 'India',
          memberSince: 'Jun 2014',
          avgResponceTime: '2 hours',
          lastDelivery: 'about 3 hours',
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
          'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/143801307/original/182ae507354f6fe0fa021e403461e9b6e40f3a03/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/143801307/original/8164c9f9c0fff64be3842996cabe58ceee7cb9e1/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/143801307/original/3ff3a9d66bd1f9ff6f5a5c4bf770b8b7957cca58/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e9f0e0b70347b7de2934b68bada4a8e3-1658276904/Mortgage%20by%20Matranga%2002/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
          'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c4cd6e4322e21031559f7ab5c899a8c1-1658280635/01/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
        ],
        description: `
        hi welcome to my gig..

        If you are looking for an amazing custom logo design with vintage, 
        classic, retro, engraving style, hand drawn style for your brand 
        project or business then I am ready to help you with ORIGINAL work.
        
        - My work is always ORIGINAL!
        - Don't use stock art or templates!
        - Do not reuse works that have been purchased by the client.
        - Real quality, using original work in the portfolio. No fake samples.
        - Quick turnaround.
        - 100% money back guarantee if you're not satisfied! 
      
        Thank you so much!
        
        Have a great day`,
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
        _id: 'i105',
        category: 'Wordpress',
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

            I have a team of professional graphic designers with an 
            experience of 8+ years. 

            We specialize in logo designing. 
            
            We're available exclusively on fiverr to rock your world 
            with our designing skills.

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

        A Team of Talented Graphic Designer with 8+ years of experience in 
        Graphic Industry, expertise as Logo Maker,You'll get creative & 
        AWESOME logo design for your business.

        ★ Why Us? ★

        - Talented Logo Maker Team
        - Fully custom made, creative, original, UNIQUE and AWESOME
          designs
        - Professional customer support 24/7
        - High Quality work
        - 100% money back policy if not satisfied

        ★ WHAT DO YOU GET? ★

        ✔ Highly Professional, UNIQUE & High Quality designs

        ✔ UNLIMITED revisions until u r 100% satisfied

        ✔ Fast turn around time 24 to 48 hours only.

        ✔ 100% original & unique vector design from Adobe Illustrator

        ✔ Vector Source Files (scalable without any quality loss)
          (AI, EPS, PDF) for the final design 
        
        ✔ PROFESSIONAL Communication & Outstanding Customer Support 
        
        ✔ Guaranteed High Quality work


        If you have any question, 

        Feel free to★ Contact Me! ★I'll be happy to help !


        Let's get started!
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
        _id: 'i107',
        category: 'Programming',
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
