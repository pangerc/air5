<!-- pages/newsroom/press-releases/[slug].vue -->
<template>
  <div v-if="post" class="container max-w-3xl mx-auto pt-12 pb-32">
    <h1 class="text-2xl italic font-n27 text-white mb-4">
      {{ post.title }}
    </h1>
    <div class="flex items-center gap-x-1 text-xs text-gray-400 mb-4">
      {{ post.location }},
      <time :datetime="post.datetime">{{ post.date }}</time>
    </div>
    <div class="text-gray-300" v-html="post.content"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;

// In a real application, you'd fetch the post data based on the slug
// For this example, we'll use dummy data
const post = ref({
  title:
    "AIR5 ANNOUNCES 5G-STANDARDS-BASED ARCHITECTURE DESIGNED FOR CABLE AND WIRELESS OPERATORS TO HARMONIZE BROADBAND ECOSYSTEMS, JEFF BROWN AS CEO, AND WORLD-RENOWNED TECHNOLOGY TEAM",
  date: "Aug 22, 2024",
  datetime: "2024-08-22",
  location: "Palo Alto",
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
});
</script>

<style scoped>
:deep(p) {
  @apply mb-2;
}
:deep(a) {
  @apply text-lime hover:text-white;
}
</style>
