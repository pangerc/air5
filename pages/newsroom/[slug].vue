<!-- pages/newsroom/press-releases/[slug].vue -->
<template>
  <div class="container max-w-3xl mx-auto pt-12 pb-32">
    <template v-if="selectedPost">
      <h1 class="text-2xl italic font-n27 text-white mb-4">
        {{ selectedPost.title }}
      </h1>
      <div class="flex items-center gap-x-1 text-xs text-gray-400 mb-4">
        {{ selectedPost.location }},
        <time :datetime="selectedPost.datetime">{{ selectedPost.date }}</time>
      </div>
      <div class="text-gray-300" v-html="selectedPost.content"></div>

      <p v-if="selectedPost.externalURL" class="pt-12 flex items-center">
        Read it on &nbsp;
        <a
          :href="selectedPost.externalURL"
          class="flex items-center text-lime text-sm cursor-pointer"
          >{{ selectedPost.externalPublication
          }}<img src="/img/arrow_up.svg" class="w-3 h-3 ml-1"
        /></a>
      </p>
    </template>
    <p v-else class="text-white">Post not found.</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;

// In a real application, you'd fetch the post data based on the slug
// For this example, we'll use dummy data
const posts = ref([
  {
    slug: "air5-announces-5g-standards-based-architecture",
    title:
      "AIR5 ANNOUNCES 5G-STANDARDS-BASED ARCHITECTURE DESIGNED FOR CABLE AND WIRELESS OPERATORS TO HARMONIZE BROADBAND ECOSYSTEMS, JEFF BROWN AS CEO, AND WORLD-RENOWNED TECHNOLOGY TEAM",
    date: "Aug 22, 2024",
    datetime: "2024-08-22",
    location: "Palo Alto",
    externalURL:
      "https://www.businesswire.com/news/home/20240822891997/en/Air5™-Announces-5G-Standards-Based-Architecture-Designed-for-Cable-and-Wireless-Operators-to-Harmonize-Broadband-Ecosystems-Jeff-Brown-as-CEO-and-World-Renowned-Technology-Team",
    externalPublication: "Business Wire",
    content: `<p class="italic">Patent-pending 5G-standards-based solution to empower the next wave of innovation for cable operators, aid in customer growth and retention, and forge alignment with technology that is driving the mobile ecosystem for wireless operators.</p>
            <p class="italic">New architecture development is led by Air5 co-founders, Jan Uddenfeldt and Lorenz Glatz, technologists behind the design of today's leading technology standards used across the wireless and cable industries.</p>
            <p>
  Air5, a new Silicon Valley based technology company focused on aligning wired
  and wireless networks, named wireless veteran Jeff Brown, its CEO and
  introduced its disruptive patent-pending 5G-standards-based network
  architecture that will, for the first time, effectively harmonize disparate
  broadband infrastructures. The innovative new concept allows a 5G-based
  network architecture to seamlessly share cable’s hybrid fiber coaxial (HFC)
  infrastructure with the industry’s current DOCSIS standard.
</p>
<p>
  The company also announced it has attracted a prestigious executive team and
  advisory board consisting of esteemed global C-level technologists and
  business luminaries from world-renowned cable, wireless, and tech companies,
  such as Liberty Global, Ericsson, Vodafone, Cisco, Charter, Comcast, Motorola
  and AT&T. The group, responsible for transforming their industries, will
  participate in the continued development and execution of Air5’s vision.
</p>
<p>
  By aligning wireless and wired broadband networks into one cohesive 5G
  infrastructure, Air5’s novel architecture will facilitate more innovative and
  interconnected mobile solutions and increase capabilities to achieve customer
  growth across wired and wireless ecosystems. The company also expects its new
  technology to bring faster speeds, higher levels of security, and allow
  current broadband systems an elegant migration path to Air5’s architecture,
  while also making it easier to take advantage of advances in Artificial
  Intelligence already implemented in 5G technology.
</p>
<p>
  “The new Air5 technology is creating a disruption of 5G beyond mobile and
  fixed wireless access into cable broadband, with higher speed, elevated
  efficiencies and new broadband experiences delivered to the combined customer
  base,” said Dr. Jan Uddenfeldt, Air5 co-founder and former CTO of Ericsson,
  one of the premier vendors in the wireless ecosystem. Uddenfeldt is considered
  the godfather of today’s wireless technology standards, is a member of the
  Wireless Hall of Fame and brings 45 years’ experience in the field from roles
  at Ericsson, Sony and twenty Silicon Valley startups.
</p>
<p>
  “Air5’s collective global wireless and cable technology team will ensure our
  technology will address domestic and international opportunities and issues as
  they pertain to the integration of 5G across all industries,” added Lorenz
  Glatz, Air5 co-founder, former CTO of Kabel Deutschland (Vodafone) and former
  SVP of Design and Architecture at Liberty Global. “This is a rare melding of
  executives to drive the new and improved meaning of wireless and wired
  broadband convergence.”
</p>
<p>
  CEO Jeff Brown, a wireless industry veteran and eight-time CEO, has held
  executive positions with PacTel Cellular (Verizon) and McCaw Cellular (AT&T
  Wireless). His previous wireless-focused companies include, RadioFrame
  Networks, Kineto Wireless and Accuris Networks.
</p>
<p>
  “Air5’s one-of-a-kind 5G-standards-based architecture will provide a
  significant boost for all wireless and cable operators by facilitating a
  richer, broader, more accessible infrastructure for innovation and customer
  engagement,” said Brown. “Our solution will enable new capabilities, services
  and economies of scale, while allowing operators to leverage Artificial
  Intelligence and other burgeoning new technologies already being integrated
  into operations and customer solutions for these networks.”
</p>
<p>
  “Jeff Brown brings a stellar track record of successful operational
  performance and vision in the wireless and technology industries,” said Sudhir
  Ispahani, Executive Chairman of Air5 and former CTO of Liberty Global. “We are
  extremely pleased to have Jeff join the Air5 team and look forward to
  benefiting from his exceptional leadership skills and deep industry expertise
  and experience.”
</p>
<p>
  Longtime cable executives agree that Air5 will help cable companies better
  differentiate themselves and enhance customer usage through advanced 5G
  network capabilities.
</p>
<p>
  “As cable companies continue their successful traction in the mobile sector,
  in order to maintain that success and achieve profitability, the network model
  must evolve to support additional growth and drive owners’ economics,” said
  Marwan Fawaz, Air5 advisory board member and distinguished cable, telecom and
  broadband executive with past leadership and advisory roles at Charter
  Communications, Motorola, Alphabet and Nest.
</p>
<p>
  Kip Compton, Air5 advisory board member, seasoned video, IoT, Cloud software
  leader and former executive at Cisco and Comcast, added, “The transformative
  Air5 architecture will help cable companies, and their current vendor
  ecosystem, tap into the vibrant 5G-based innovation marketplace to maximize
  optionality for all players.”
</p>
<p>
  According to Statista, there “were an estimated 2.17 billion 5G mobile
  subscriptions worldwide in 2024 up from just 1.58 billion the previous year.
  This figure is expected to exceed 5.56 billion by the end of the decade with
  5G set to surpass 4G as the world’s leading mobile network technology.”
</p>
<p>
  About Air5 (air5.io) Originated in 2024 and based in Palo Alto, California,
  Air5 and its patent-pending 5G-standards- based architecture technology are
  harmonizing wireless and wired cable broadband ecosystems to offer a more
  vibrant and ubiquitous environment for the development of dynamic value-added
  mobile solutions and innovative strategies for customer retention and growth.
  The company is led by wireless pioneer and experienced CEO, Jeff Brown, and
  has brought together an impressive team of prominent global technologists and
  business luminaries responsible for leading and innovating some of the most
  world-renowned cable, wireless and technology companies.
</p>

<p>
  For more information: Teresa Fausti
  <a href="mailto:teresa@fausticommunications.com"
    >teresa@fausticommunications.com</a
  >
</p>
<p>Kayla McFarland <a href="mailto: kayla@arcade.io">kayla@arcade.io</a></p>
`,
  },
  {
    slug: "air5-appoints-raj-singh",
    title:
      "AIR5 APPOINTS PROLIFIC NETWORK AND SEMI-CONDUCTOR VETERAN, RAJ SINGH, TO ITS ADVISORY BOARD OF WIRELESS AND CABLE INDUSTRY TECHNOLOGY LEADERS",
    date: "Sep 18, 2024",
    datetime: "2024-09-17",
    location: "Palo Alto",
    externalURL:
      "https://www.businesswire.com/news/home/20240917770491/en/Air5™-Appoints-Prolific-Network-and-Semiconductor-Veteran-Raj-Singh-to-Its-Advisory-Board-of-Wireless-and-Cable-Industry-Technology-Leaders",
    externalPublication: "Business Wire",
    content: `<p class="italic">Singh brings decades of revolutionary technology design, products and companies resulting in multibillion dollar exits to Google, Cisco and more</p>
<p>Air5, a new Silicon Valley-based technology company powering a shared future for cable and wireless networks, announced, today it has added accomplished network infrastructure, software, semi-conductor and enterprise platforms entrepreneur, Raj Singh to its <a href="http://www.air5.io/">advisory board</a>. Singh will join the company's distinguished group of renowned technologists and top executives from the finance, cable and wireless industries, including former C-level leaders from such companies as Cisco, Charter, Comcast, Motorola, Alphabet, Nest and AT&T.</p>
<p>A seasoned Silicon Valley technologist, entrepreneur, venture capitalist and executive for multiple startups, Singh has founded and managed several venture-backed companies with the likes of Vinod Khosla and Promod Haque that sold for several billions to some of the biggest global leaders like Cisco and Google. His leadership spans more than three decades across such names as API management platform company, Apigee; incubator of wide area infrastructure startups, Comstellar Communications; semi-conductor company for routers and switches, StratumOne Communications; and Cerent, a high speed multiplexer for telecom infrastructure.</p>
<p>Singh is co-author of a self-published textbook "Digital Design and Synthesis with Verilog HDL, widely used by chip designers and universities in the US.</p>
<p>"Raj Singh brings an incredible track record of breakthrough products and companies responsible for transforming several pivotal technology segments, especially optical in the wide area network space. Raj, a brilliant engineer and among top ten movers and shakers in the enterprise technologies, is also a wonderful human being" said Vish Mishra, Air5 fellow advisory board member and VC at Clearstone Venture Partners with multibillion dollar exits. Mishra is considered one of the top 10 influencers in Silicon Valley and is a successful venture capitalist with more than 40 years' experience. "Air5 will benefit greatly from the operational knowledge, technology insights, vast network and exit prowess brought by Raj."</p>
<p>"Air5 has the technology and leadership to accelerate and increase the accessibility of 5G benefits to cable and wireless companies and their customers," added Singh. "I am honored to join the advisory board of esteemed technologists and business visionaries, who with the Air5 team, will quickly advance a cohesive infrastructure for enhanced mobile, streaming and AI experiences."</p>
<p>Air5 recently announced it has named wireless veteran Jeff Brown, its CEO and introduced its disruptive patent-pending 5G-standards-based network architecture that will, for the first time, effectively harmonize disparate broadband infrastructures. The innovative new concept allows a 5G-based network architecture to seamlessly share cable's hybrid fiber coaxial (HFC) infrastructure with the industry's current DOCSIS standard.</p>
<p>According to the company, by aligning wireless and wired broadband networks into one cohesive 5G infrastructure, Air5's novel architecture will facilitate more innovative and interconnected mobile solutions and increase capabilities to achieve customer growth across wired and wireless ecosystems. The company also expects its new technology to bring faster speeds, higher levels of security, and allow current broadband systems an elegant migration path to Air5's architecture, while also making it easier to take advantage of advances in Artificial Intelligence already implemented in 5G technology.</p>
<p><a href="http://www.air5.io/newsroom/library">Click here</a> for more details and visuals of the Air5 technology and how it works. For more information about Air5, visit <a href="http://www.air5.io">www.air5.io</a>, email <a href="mailto:info@air5.io">info@air5.io</a> or call <a href="tel:650-275-3045">650-275-3045</a>.</p>

<p>About Air5 (air5.io)</p>
<p>Originated in 2024 and based in Palo Alto, California, Air5 and its patent-pending 5G-standards- based architecture technology are harmonizing wireless and wired cable broadband ecosystems to offer a more vibrant and ubiquitous environment for the development of dynamic value-added mobile solutions and innovative strategies for customer retention and growth. The company is led by wireless pioneer and experienced CEO, Jeff Brown, and has brought together an impressive team of prominent global technologists and business luminaries responsible for leading and innovating some of the most world-renowned cable, wireless and technology companies.</p>  
  <p>
  For more information: Teresa Fausti
  <a href="mailto:teresa@fausticommunications.com"
    >teresa@fausticommunications.com</a
  >
</p>
<p>Kayla McFarland <a href="mailto: kayla@arcade.io">kayla@arcade.io</a></p>`,
  },
]);
// Select the correct post based on the slug
const selectedPost = computed(() =>
  posts.value.find((post) => post.slug === slug)
);
</script>

<style scoped>
:deep(p) {
  @apply mb-2;
}
:deep(a) {
  @apply text-lime hover:text-white;
}
</style>
