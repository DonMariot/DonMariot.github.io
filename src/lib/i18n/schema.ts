export type Translations = {
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stack: string;
  };

  problem: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    footer: string;
  };

  solution: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  proof: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    proofs: {
      title: string;
      statement: string;
      signals: string[];
      proof: string;
    }[];
    footer: string;
  };

  architecture: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    asideAlt: string;
  };

  method: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    steps: {
      title: string;
      description: string;
      details: string[];
    }[];
    footer: string;
  };

  principles: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
  };

  capabilities: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
    footer: string;
  };

  contact: {
    title: {
      main: string;
      highlight: string;
    };
    description: string;
    form: {
      name: string;
      email: string;
      company: string;
      problem: string;
      solution: string;
      budget: string;
      context: string;
      submit: string;
      sending: string;
    };
    footer: string;
  };

  nav: {
    home: string;
    problem: string;
    solutions: string;
    proof: string;
    stack: string;
    method: string;
    principles: string;
    expertise: string;
    contact: string;
  };

  popup: {
    title: string;
    line1: string;
    line2: string;
    cta: string;
  };

  header: {
    title: string;
  };

  lang: {
    en: string;
    fr: string;
  };

  about: {
    subtitle: string;
    description: string;
    cv: string;
    contact: string;
  };
};