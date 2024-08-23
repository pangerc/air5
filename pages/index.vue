<template>
  <Hero />
  <Mission />
  <Statement />
  <Why5G />
  <section class="container mx-auto py-32" id="team">
    <h2>Executive Team</h2>
    <h4 class="text-center">
      Air5 has brought together a number of veterans from both the cable and
      wireless industries.
    </h4>
    <Team :people="leadership" />
  </section>
  <section class="container mx-auto pb-32">
    <h2
      class="font-n27 text-2xl md:text-4xl lg:text-5xl italic text-white mx-4 text-center"
    >
      Advisors
    </h2>
    <Team :people="advisory" />
  </section>
  <section class="container mx-auto max-w-5xl py-12">
    <h2 class="mx-4">Newsroom</h2>
    <div class="md:flex w-full py-12 md:space-x-12">
      <div class="w-full md:w-2/3">
        <h3 class="text-white mb-6 mx-4 md:mx-0">Latest Posts</h3>
        <Releases />
      </div>
      <div class="w-full md:w-1/3 mt-6 md:mt-0">
        <h3 class="text-white mb-6 mx-4 md:mx-0">Media Mentions</h3>
        <Mentions :limit="3" />
      </div>
    </div>
  </section>
  <Location />
  <Footer />
</template>
<script setup>
import Hero from "~/components/hero3.vue";
import Mission from "~/components/mission.vue";
import Statement from "~/components/statement.vue";
import Why5G from "~/components/why5g.vue";
import Footer from "~/components/footer.vue";
import Team from "~/components/team.vue";
import Location from "~/components/paloalto.vue";
import Releases from "~/components/news/releases.vue";
import Mentions from "~/components/news/mentions_gs.vue";

const advisory = ref([
  {
    name: "Marwan Fawaz",
    role: "Senior Advisor",
    imageUrl: "/team/marwan.png",
    bio: "an experienced executive with an extensive background in Cable, Telecom, Broadband, Connected home. Marwan was the CEO of Nest and executive advisor at Alphabet, CEO of Motorola Home, EVP Strategy &CTO at Charter Comuunications along with a number of board seats.",
    linkedinUrl: "https://www.linkedin.com/in/marwanfawaz/",
  },
  {
    name: "Kip Compton",
    role: "Senior Advisor",
    imageUrl: "/team/kip.png",
    bio: "a seasoned executive who has led the development of business across video, networking , IoT and Cloud software platforms.  Kip’s past engagements include SVP Strategy and BD, Networking at Cisco and VP Video/Media at Comcast as well as a member of the board for several companies.",
    linkedinUrl: "https://www.linkedin.com/in/kipcompton/",
  },
  {
    name: "Vish Mishra",
    role: "Advisor",
    imageUrl: "/team/vish.png",
    bio: "considered one of the top 10 influencers in Silicon Valley (San Jose Mercury News).  Through his 40+ year run in the venture capital industry, Vish’s investment record and his advice for companies is unparalleled.  Vish currently serves as Mnanaging Director for BlueVine Ventures and General Partner and Venture Director for Clearstone Venture Partner.",
    linkedinUrl: "https://www.linkedin.com/in/vishmishra/",
  },
  {
    name: "Glen Lurie",
    role: "Senior Advisor",
    imageUrl: "/team/glen.png",
    bio: "a pioneer in the modern wireless world. Glenn brought the iPhone into the market while President of Emerging Devices at AT&T. Glenn finished his career at AT&T as President & CEO Mobility and Consumer Ops.  Later CEO of Synchronoss Tech. and now a Venture Partner at Stormbreaker Ventures.",
    linkedinUrl: "https://www.linkedin.com/in/glennlurie/",
  },
  // {
  //   name: "Raj Singh",
  //   role: "Advisor",
  //   imageUrl: "/team/raj.png",
  //   bio: "Serial entrepreneur, having founded and exited several successful Silicon Valley startups.",
  //   linkedinUrl: "",
  // },
]);
const leadership = ref([
  {
    name: "Sudhir Ispahani",
    role: "Executive Chairman",
    imageUrl: "/team/sudhir.png",
    bio: "former CTO of Liberty Global, built and operated the world’s largest cable operator. Uniquely tied to both operators and vendors, Sudhir sees the world through both business and technology lenses with a vision for the future.",
    linkedinUrl: "https://www.linkedin.com/in/sudhir-ispahani-0118075/",
  },
  {
    name: "Dr. Jan Uddenfeldt",
    role: "Co-Founder",
    imageUrl: "/team/jan.png",
    bio: "former CTO of Ericsson, is considered the godfather of the wireless standards beginning with GSM and progressing through 5G.  Jan has deep ties to operators worldwide as well as to all of the major players in the wireless vendor community.",
    linkedinUrl: "https://www.linkedin.com/in/jan-uddenfeldt-4b7379/",
  },
  {
    name: "Lorenz Glatz",
    role: "Co-Founder",
    imageUrl: "/team/lorenz.png",
    bio: "former CTO of Kabel Deutschland (Vodafone), then Europe's biggest cable operator, and SVP of Design and Architecture at Liberty Global, is a vital contributor to a number of the key developments in the industry.",
    linkedinUrl: "https://www.linkedin.com/in/lorenzglatz/",
  },
  {
    name: "Jeff Brown",
    role: "CEO",
    imageUrl: "/team/jeff.png",
    bio: "a wireless industry veteran and eight time CEO, held executive positions with AirTouch (PacTel Cellular) and AT&T Wireless (McCaw Cellular).  His previouswireless focused companies include RadioFrame Networks, Kineto Wireless and Accuris Networks.",
    linkedinUrl: "https://www.linkedin.com/in/jeffrey-s-brown/",
  },
]);
</script>
