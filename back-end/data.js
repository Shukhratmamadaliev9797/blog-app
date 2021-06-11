import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "Shukhrat",
      lastName: "Mamadaliev",
      gender: "male",
      city: "London",
      country: "UK",
      email: "shukhrat1@gmail.com",
      password: bcrypt.hashSync("1111", 8),
      isAdmin: true,
    },
    {
      firstName: "Zilola",
      lastName: "Ahmadjanova",
      gender: "female",
      city: "Namangan",
      country: "Uzbekistan",
      email: "zilola@gmail.com",
      password: bcrypt.hashSync("222", 8),
      isAdmin: false,
    },
  ],
  blogs: [
    {
      image1: "/images/news/news1.jpeg",
      title: "Portugal travel delays frustrate Britons",
      category: "general",
      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news2.jpeg",
      title:
        "Norway police say body on shore is Kurdish-Iranian boy who died in Channel",
      category: "crime",
      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news3.png",
      title: "My foggy glasses solution helped me through Covid",
      category: "health",
      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news4.jpeg",
      title:
        "Euro 2020: Ben White called up as replacement for Trent Alexander-Arnold in England squad",
      category: "sport",
      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news5.jpeg",
      title: "Jeff Bezos and brother to fly to space in Blue Origin flight",
      category: "famous",

      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },

    {
      image1: "/images/news/news6.jpeg",
      title: "Foreign aid: Who will be hit by the UK government cuts?",
      category: "country",
      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news7.jpeg",
      title: "When and where can I ride an e-scooter legally?",
      category: "country",

      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
    {
      image1: "/images/news/news2.jpeg",
      title:
        "police say body on shore is Kurdish-Iranian boy who died in Channel",
      category: "crime",

      paragraph1:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
      paragraph2:
        "From 04:00 BST on Tuesday Portugal will be dropped from the green list, and returnees made to self-isolate for 10 days and take two PCR tests. Airlines have added extra capacity, with British Airways and EasyJet saying there are seats available. But people are reporting difficulties in getting pre-departure tests. Bookings to Portugal soared last month after it was placed on the green list, meaning UK residents could travel there without having to quarantine on their return. The government last Thursday announced Portugal would move to the amber list. The Department for Transport cited a near doubling of positive Covid cases in Portugal in the last three weeks, and concerns about the detection of a mutation of the Delta variant first identified in India. Health Secretary Matt Hancock said 'tough' rules on travel were necessary to protect the success of the UK's vaccine rollout.  He is due to update MPs this afternoon on the latest developments in the pandemic.",
    },
  ],
};

export default data;
