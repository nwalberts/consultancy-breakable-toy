import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";
import { getRandomDate } from "../utils/getRandomDate.js";
import { getRandomInteger } from "../utils/getRandomInteger.js";

const squidNames = ["Terri", "Remi", "Anastasia", "Firas", "Griffin", "Mariel", "Dustin", "Adrian"];

const imageUrls = [
  "https://ipfs.pixura.io/ipfs/QmUues6qhkbptjxwBJqk4Nr8WfYvUBoEUA7wSsGrSFcLxW/CthulhuNrThreeSR.jpg",
  "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/GettyImages-508486981-1024x680.jpg?w=1155&h=3572",
  "https://www.open.edu/openlearn/pluginfile.php/3272380/tool_ocwmanage/articletext/0/trans_squid_i1.jpg",
  "https://img2.thejournal.ie/article/5474718/river?version=5477599&width=1340",
  "https://www.cnet.com/a/img/resize/e1a81ae09b3a9a48265124e9b93095845769ce72/hub/2015/08/03/8474f3c8-67cd-4317-925e-e29b98ce65cd/vamp4-t682.jpg?auto=webp&width=1092",
  "https://www.antarctica.gov.au/site/assets/files/45652/squid-larva.1600x0.jpg",
];

const specialPowers = ["ink", "camouflage", "bioluminescence", "flight"];

const squidSpecies = [
  "Colossal Squid",
  "Humboldt Squid",
  "Vampire Squid",
  "Firefly Squid",
  "Dana Octopus Squid",
  "Flying Squid",
];

Factory.define("Squid", Squid)
  .sequence("name", () => `${squidNames[getRandomInteger(squidNames.length)]}`)
  .sequence("species", () => `${squidSpecies[getRandomInteger(squidSpecies.length)]}`)
  .sequence("experiencePoints", () => getRandomInteger(10))
  .sequence("specialPower", () => specialPowers[getRandomInteger(specialPowers.length)])
  .sequence("imageUrl", () => imageUrls[getRandomInteger(imageUrls.length)])
  .sequence("birthday", () => getRandomDate());

export { Factory };
