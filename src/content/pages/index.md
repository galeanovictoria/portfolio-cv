---
_schema: default
title: Home
description: >-
  UX/UI and product designer in Dunedin, New Zealand — ten years turning ambiguous,
  high-stakes problems into interfaces that ship, for clients including Twitch, PaperCut
  and Te Tautiaki Hoiho.
pageSections:
  - _component: page-sections/heroes/hero-portfolio
    sectionLabel: Top
    eyebrow: Victoria Roberts — Portfolio '26
    headingLead: I design products people
    rotatingWords:
      - text: love
      - text: trust
      - text: ship
      - text: remember
      - text: depend on
    headingTrail: ''
    rotateInterval: 2200
    subtext: >-
      UX/UI & product designer in Dunedin, New Zealand — ten years turning ambiguous,
      high-stakes problems into **interfaces that ship**, for clients like Twitch,
      PaperCut and Te Tautiaki Hoiho. A decade in technical support taught me to hunt
      real pain points; front-end development taught me to build the fix.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: See the work ↓
        hideText: false
        link: '#work'
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: md
      - _component: building-blocks/core-elements/button
        text: Get in touch
        hideText: false
        link: '#contact'
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: md
    patternSource: /assets/hero-pattern.png
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 5xl
    colorScheme: inherit
    backgroundColor: base

  - _component: page-sections/info-blocks/section-header
    sectionLabel: Work
    heading: Selected work
    headingLevel: h2
    note: 01 — 05 / case studies
    doodleSource: /assets/doodle/laptop.svg
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 3xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/case-studies/case-study-row
    sectionLabel: ''
    number: '01'
    heading: PaperCut Partner Portal
    headingLevel: h3
    meta: PAPERCUT · CLOUDCANNON · SOLE DESIGNER · 2024—NOW
    description: >-
      My largest project — PaperCut's global partner portal, designed solo from the
      ground up. I ran the research, aligned stakeholders, set the roadmap, and designed
      the collateral library, order forms, and sales databases at its core. I built the
      portal's design system on PaperCut's own product foundations, so it stayed true to
      their wider brand.
    quoteText: >-
      With the new Portal, our teams are empowered to make the changes we need. It's a
      game-changer, and it feels like a breath of fresh air.
    quoteAttribution: Lisa Cole Miller, Global Channel Activation Team Lead, PaperCut
    tags:
      - text: Research → roadmap → launch
      - text: Design system on their foundations
      - text: Cross-department stakeholders
    stats:
      - value: +21%
        label: Monthly portal visits
      - value: 25+
        label: Editors publishing
      - value: '5'
        label: Teams self-serving
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Read the case study →
        hideText: false
        link: /work/papercut-partner-portal/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: sm
      - _component: building-blocks/core-elements/button
        text: CloudCannon write-up ↗
        hideText: false
        link: https://cloudcannon.com/customers/papercut-partner-portal/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
    mediaSections:
      - _component: building-blocks/wrappers/framed-media
        imageSource: https://cc-dam.imgix.net/pc-portal-screen.png?auto=compress&auto=format&w=1400
        imageAlt: PaperCut Partner Portal homepage
        priority: false
        ratio: 16 / 9
        border: true
        rounded: true
        surface: paper
        mediaSections: []
      - _component: building-blocks/wrappers/figure-grid
        figures:
          - imageSource: https://cc-dam.imgix.net/pc-portal-components.png?auto=compress&auto=format&w=800
            imageAlt: The portal assembled from editable components
            caption: ''
            fit: cover
          - imageSource: https://cc-dam.imgix.net/pc-portal-variant.png?auto=compress&auto=format&w=800
            imageAlt: Role-based content variations in the portal
            caption: ''
            fit: cover
        columns: 2
        ratio: 16 / 10
        gap: md
        surface: paper
    reverse: false
    divider: true
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/case-studies/case-study-row
    sectionLabel: ''
    number: '02'
    heading: Jetstream — flagship template
    headingLevel: h3
    meta: CLOUDCANNON · UX + UI + DESIGN SYSTEM · 2026
    description: >-
      CloudCannon's first complete template on the Astro Component Starter. I owned it
      end-to-end and handed clean tokens to engineering in under three weeks. It's now
      the template new users start with — the clearest showcase of the product's visual
      editor. My work went beyond the front-end: I made sure the CMS editing experience
      was just as considered — intuitive content controls, clear field descriptions, and
      inputs that follow the best UX CloudCannon can offer.
    quoteText: ''
    quoteAttribution: ''
    tags: []
    stats:
      - value: 260+
        label: Leads generated
      - value: '13'
        label: New customers
      - value: <3wk
        label: To handoff
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: View live template ↗
        hideText: false
        link: https://cloudcannon.com/templates/jetstream/?ssg=Astro
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: sm
        target: _blank
        rel: noopener noreferrer
      - _component: building-blocks/core-elements/button
        text: Read the write-up ↗
        hideText: false
        link: https://cloudcannon.com/blog/introducing-jetstream-built-on-the-astro-component-starter/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
    mediaSections:
      - _component: building-blocks/wrappers/framed-media
        imageSource: ''
        imageAlt: ''
        priority: false
        ratio: 16 / 10
        border: true
        rounded: true
        surface: ink
        mediaSections:
          - _component: building-blocks/wrappers/browser-frame
            url: cloudcannon.com/templates/jetstream
            lightImageSource: /src/assets/images/site/js-fullpage-light.jpg
            lightImageAlt: Jetstream template — light mode
            darkImageSource: /src/assets/images/site/js-fullpage.jpg
            darkImageAlt: Jetstream template — dark mode
            defaultMode: dark
            scrollable: true
            surface: ink
      - _component: building-blocks/wrappers/figure-grid
        figures:
          - imageSource: /src/assets/images/site/js-components.jpg
            imageAlt: CMS editor annotations on the Jetstream template
            caption: ''
            fit: cover
          - imageSource: /src/assets/images/site/js-cards.jpg
            imageAlt: Jetstream feature cards
            caption: ''
            fit: cover
        columns: 2
        ratio: 1 / 1
        gap: md
        surface: paper
    reverse: true
    divider: true
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/case-studies/case-study-row
    sectionLabel: ''
    number: '03'
    heading: Documentation site redesign
    headingLevel: h3
    meta: CLOUDCANNON · DESIGN SYSTEM + UI · DARK MODE
    description: >-
      A ground-up redesign of the CloudCannon documentation. I built a dedicated design
      system for docs — type scale, components, and navigation patterns — working closely
      with stakeholders across content and engineering to get it right. I also designed
      and shipped a full dark mode, so the docs are comfortable to read in any
      environment.
    quoteText: ''
    quoteAttribution: ''
    tags:
      - text: Docs design system
      - text: Light + dark mode
      - text: Stakeholder collaboration
    stats: []
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: View documentation ↗
        hideText: false
        link: https://cloudcannon.com/documentation/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: sm
        target: _blank
        rel: noopener noreferrer
      - _component: building-blocks/core-elements/button
        text: Read the write-up ↗
        hideText: false
        link: https://cloudcannon.com/blog/redesigning-cloudcannons-docs-with-diataxis-lume-and-pagefind/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
    mediaSections:
      - _component: building-blocks/wrappers/framed-media
        imageSource: ''
        imageAlt: ''
        priority: false
        ratio: 16 / 10
        border: true
        rounded: true
        surface: ink
        mediaSections:
          - _component: building-blocks/wrappers/browser-frame
            url: cloudcannon.com/documentation
            lightImageSource: /src/assets/images/site/docs-page-light.jpg
            lightImageAlt: CloudCannon documentation — light mode
            darkImageSource: /src/assets/images/site/docs-page-dark.jpg
            darkImageAlt: CloudCannon documentation — dark mode
            defaultMode: light
            scrollable: true
            surface: ink
      - _component: building-blocks/wrappers/figure-grid
        figures:
          - imageSource: /src/assets/images/site/docs-dark.jpg
            imageAlt: The documentation in dark mode
            caption: ''
            fit: cover
          - imageSource: /src/assets/images/site/docs-system.jpg
            imageAlt: The documentation component system
            caption: ''
            fit: cover
        columns: 2
        ratio: 1 / 1
        gap: md
        surface: paper
    reverse: false
    divider: true
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/case-studies/case-study-row
    sectionLabel: ''
    number: '04'
    heading: TwitchCon
    headingLevel: h3
    meta: TWITCH · CLOUDCANNON · UX LEAD · 2025
    description: >-
      Twitch came to us for basic wireframes; I grew it into a full UX engagement. I
      designed the flow from hero to ticket purchase, a filterable mobile schedule for
      on-site attendees, and a reusable component system editors update without a
      developer — accessibility led throughout.
    quoteText: >-
      What impressed me most was how Vic navigated our complex stakeholder group of 10-12
      people.
    quoteAttribution: Cayvon Morady, Senior Technical Program Manager, Twitch
    tags:
      - text: Scope grown from brief
      - text: 10–12 stakeholders
      - text: Accessibility-led
    stats: []
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Read the case study →
        hideText: false
        link: /work/twitchcon/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: sm
      - _component: building-blocks/core-elements/button
        text: CloudCannon write-up ↗
        hideText: false
        link: https://cloudcannon.com/customers/twitchcon/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
    mediaSections:
      - _component: building-blocks/wrappers/framed-media
        imageSource: https://cc-dam.imgix.net/blog-twitchcon-full-site.png?auto=compress&auto=format&w=1400
        imageAlt: The TwitchCon website
        priority: false
        ratio: 2.8 / 1
        border: true
        rounded: true
        surface: paper
        mediaSections: []
      - _component: building-blocks/wrappers/figure-grid
        figures:
          - imageSource: https://cc-dam.imgix.net/blog-twitchcon-wirefame-to-reality.png?auto=compress&auto=format&w=800
            imageAlt: Wireframe alongside the finished design
            caption: ''
            fit: cover
          - imageSource: https://cc-dam.imgix.net/blog-twitchcon-accessibility.png?auto=compress&auto=format&w=800
            imageAlt: Accessibility considered from the wireframe stage
            caption: ''
            fit: cover
        columns: 2
        ratio: 2.8 / 1
        gap: md
        surface: paper
    reverse: true
    divider: true
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/case-studies/case-study-row
    sectionLabel: ''
    number: '05'
    heading: Te Tautiaki Hoiho
    headingLevel: h3
    meta: YELLOW-EYED PENGUIN TRUST · LEAD DESIGNER · 2025
    description: >-
      Design and visual direction for a conservation trust's rebuild, shifting the brand
      from penguin blue-and-yellow to greens and earth tones. Designed with development
      running in parallel to hit a primetime TV deadline — and built for the editing
      experience as much as the visitor's, so the trust's own staff could publish without
      a developer.
    quoteText: >-
      Having a platform where we can update and manage the website ourselves, without
      needing to go through an agency for every change, has been a big part of that
      independence.
    quoteAttribution: Anna Campbell, General Manager, Te Tautiaki Hoiho
    tags:
      - text: Lead designer
      - text: Under a month, design to launch
      - text: Editor-first components
    stats: []
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Read the case study →
        hideText: false
        link: /work/te-tautiaki-hoiho/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: sm
      - _component: building-blocks/core-elements/button
        text: View live site ↗
        hideText: false
        link: https://yellow-eyedpenguin.org.nz/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
    mediaSections:
      - _component: building-blocks/wrappers/framed-media
        imageSource: https://cc-dam.imgix.net/yellow-eye-penguin-home.png?auto=compress&auto=format&w=1400
        imageAlt: Yellow-eyed Penguin Trust homepage
        priority: false
        ratio: 16 / 9
        border: true
        rounded: true
        surface: paper
        mediaSections: []
      - _component: building-blocks/wrappers/figure-grid
        figures:
          - imageSource: https://cc-dam.imgix.net/yellow-eyed-penguin-help-section.png?auto=compress&auto=format&w=800
            imageAlt: The How to help section
            caption: ''
            fit: cover
          - imageSource: https://cc-dam.imgix.net/yept-projects-editor.png?auto=compress&auto=format&w=800
            imageAlt: Editing the site in CloudCannon
            caption: ''
            fit: cover
        columns: 2
        ratio: 16 / 10
        gap: md
        surface: paper
    reverse: false
    divider: true
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/builders/link-card-grid
    sectionLabel: ''
    cards:
      - imageSource: /src/assets/images/site/venture.jpg
        imageAlt: The Venture template
        title: Venture
        meta: CLOUDCANNON TEMPLATE · 11TY ↗
        link: https://cloudcannon.com/templates/venture/?ssg=11ty
        newTab: true
      - imageSource: /src/assets/images/site/marketing.jpg
        imageAlt: CloudCannon marketing site work
        title: Marketing site redesign
        meta: CLOUDCANNON · DESIGN + ASSETS ↗
        link: https://cloudcannon.com/
        newTab: true
      - imageSource: /src/assets/images/site/js-buttons.jpg
        imageAlt: The Astro Component Starter design system in Figma
        title: Astro Component Starter
        meta: DESIGN SYSTEM · FIGMA DOCUMENTATION ↗
        link: https://astro-component-starter.cc/
        newTab: true
    columns: 3
    ratio: 4 / 3
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 3xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/builders/custom-section
    label: The asset box
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 2xl
    colorScheme: inherit
    backgroundColor: none
    rounded: false
    useDefaultEditableBinding: true
    contentSections:
      - _component: building-blocks/wrappers/card
        label: ''
        rounded: true
        border: true
        backgroundColor: surface
        paddingHorizontal: none
        paddingVertical: none
        colorScheme: inherit
        contentSections:
          # The kit itself sits on the tinted base so the write-up below it reads
          # as the lighter half of the card, as in the design.
          - _component: building-blocks/wrappers/card
            label: ''
            rounded: false
            border: false
            backgroundColor: base
            paddingHorizontal: xl
            paddingVertical: xl
            colorScheme: inherit
            contentSections:
              - _component: building-blocks/wrappers/framed-media
                imageSource: /src/assets/images/site/doodles-light.svg
                imageAlt: >-
                  The doodle library — illustrated marks in the CloudCannon brand palette
                priority: false
                ratio: ''
                border: true
                rounded: true
                surface: paper
                mediaSections: []
              - _component: building-blocks/core-elements/mono-label
                text: >-
                  The doodle library — line art built to be recombined and recoloured to
                  the brand palette.
                tone: muted
                size: xs
                tracking: none
                uppercase: false
                alignmentHorizontal: start
              - _component: building-blocks/wrappers/figure-grid
                figures:
                  - imageSource: /src/assets/images/site/kit-design101-a.png
                    imageAlt: Rule of thirds demonstrated over a photograph
                    caption: >-
                      **Design 101** — I taught composition, not just assets: rule of
                      thirds, golden ratio, leading lines.
                    fit: cover
                  - imageSource: /src/assets/images/site/kit-specs-frame.png
                    imageAlt: An accessibility blog asset built from the kit
                    caption: >-
                      **Built from the kit** — an icon, a background, the palette.
                      Assembled by a writer, not a designer.
                    fit: cover
                  - imageSource: /src/assets/images/site/kit-specs-card.png
                    imageAlt: The same asset in place on the CloudCannon blog card
                    caption: >-
                      **Live on the blog** — framing specs mean it survives the card
                      crop. Post by David Large.
                    fit: contain
                columns: 3
                ratio: 4 / 3
                gap: md
                surface: paper
          - _component: building-blocks/wrappers/card
            label: ''
            rounded: false
            border: false
            backgroundColor: none
            paddingHorizontal: xl
            paddingVertical: xl
            colorScheme: inherit
            contentSections:
              - _component: building-blocks/wrappers/split
                label: ''
                distributionMode: half
                fixedWidth: null
                minSplitWidth: 760
                alignmentVertical: center
                reverse: false
                reverseOrderOnMobile: false
                gap: xl
                firstColumnContentSections:
                  - _component: building-blocks/core-elements/mono-label
                    text: Design enablement
                    tone: accent
                    size: sm
                    tracking: label
                    uppercase: true
                    alignmentHorizontal: start
                  - _component: building-blocks/core-elements/heading
                    text: The asset box — teaching a marketing team to design
                    level: h2
                    size: md
                    alignmentHorizontal: start
                    iconName: ''
                    iconColor: default
                    iconPosition: before
                  - _component: building-blocks/core-elements/text
                    text: >-
                      CloudCannon's writers needed blog and campaign imagery, but had no
                      designer on call. Rather than take the requests, I built them a
                      kit: a library of doodles, icons and backgrounds in the approved
                      palette, with framing specs so artwork survives the crop on a blog
                      card, and getting-started guides for assembling something new.


                      Then I taught them the reasoning behind it — a Design 101 section
                      covering composition, the rule of thirds, the golden ratio, leading
                      lines — and ran Figma training so the team could work in the file
                      confidently. The point wasn't to hand over assets; it was to make
                      non-designers independent, on brand, without me in the loop.
                    size: lg
                    alignmentHorizontal: start
                  - _component: building-blocks/core-elements/tag-list
                    tags:
                      - text: Doodles, icons & backgrounds
                      - text: Framing specs
                      - text: Getting-started guides
                      - text: Design 101
                      - text: Figma training
                    tone: outline
                    size: sm
                    alignmentHorizontal: start
                secondColumnContentSections:
                  - _component: building-blocks/core-elements/testimonial
                    text: >-
                      As a colourblind non-designer who has to create assets, having such
                      a range to choose from and adapt (and with a preset colour palette)
                      has been a huge timesaver. They let me stick to our approved brand
                      style while injecting a little personality into each image I create.
                    authorName: David Large
                    authorDescription: Content Specialist, CloudCannon
                    authorImage: ''
                    alignmentHorizontal: start

  - _component: page-sections/people/about-profile
    sectionLabel: About
    eyebrow: About
    heading: A planner at heart, endlessly curious by habit.
    headingLevel: h2
    body: >-
      Before design, I spent years on the other end of the phone — front line, then
      Subject Matter Expert, Manager, Senior Manager, running support and provisioning
      teams. You learn things there you can't learn from a research deck: that people
      rarely describe the actual problem, that they blame themselves for bad interfaces,
      and that most frustration is a design decision someone made months earlier without
      thinking about it. That's what pulled me upstream, and eventually into design.


      The through line is that I design for whoever has to live with the thing
      afterwards. On **PaperCut's partner portal** that meant 25+ editors across five
      teams publishing without a developer; on **TwitchCon**, a component system Twitch
      could change the week of the event; for **Te Tautiaki Hoiho**, a small conservation
      team who no longer wait on an agency. Pretty screens are the easy half.


      I'm a planner by nature — clear roadmaps, things in order — which turns out to be
      what messy product problems and large stakeholder groups need. Because I understand
      code, business goals and customer psychology, I can hold a room of 10–12
      stakeholders to one coherent direction and hand engineering something they can
      actually build.


      I work in **English and Spanish** and get by in Portuguese, Italian and French —
      handy across global teams and clients. I'm genuinely passionate about design and
      art in every form, and I've woven AI (Claude & Claude Design) into how I work to
      move faster without cutting corners.
    aside: >-
      Off the clock: piano, guitar, ukulele and percussion, a good book, my journal, and
      long walks with my dog.
    imageSource: /src/assets/images/site/vic-portrait-bw.png
    imageAlt: Victoria Roberts
    imageRatio: 4 / 5
    skills:
      - text: Design systems
      - text: UX research
      - text: Interaction design
      - text: Prototyping
      - text: Accessibility
      - text: Design → dev handoff
    stats:
      - value: '10'
        label: Years in design
      - value: '9'
        label: Design systems owned
      - value: '4'
        label: Published case studies
    doodleSource: /assets/doodle/hands.svg
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: dark
    backgroundColor: base

  - _component: page-sections/ctas/cta-panel
    sectionLabel: Writing
    eyebrow: Writing
    heading: I write about design & building on the web
    headingLevel: h2
    subtext: Articles and template deep-dives on the CloudCannon blog.
    doodleSource: /assets/doodle/stack.svg
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Read my posts ↗
        hideText: false
        link: https://cloudcannon.com/blog/authors/victoria-roberts/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: primary
        size: md
        target: _blank
        rel: noopener noreferrer
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: 3xl
    colorScheme: inherit
    backgroundColor: none

  - _component: page-sections/ctas/cta-oversized
    sectionLabel: Contact
    eyebrow: Let's talk
    heading: Let's make something.
    headingLevel: h2
    headingLink: mailto:mvictoriaroberts@gmail.com
    doodleSource: /assets/doodle/envelope.svg
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: mvictoriaroberts@gmail.com
        hideText: false
        link: mailto:mvictoriaroberts@gmail.com
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
      - _component: building-blocks/core-elements/button
        text: LinkedIn ↗
        hideText: false
        link: https://www.linkedin.com/in/victoria-roberts-9b303193/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
      - _component: building-blocks/core-elements/button
        text: Blog ↗
        hideText: false
        link: https://cloudcannon.com/blog/authors/victoria-roberts/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
        target: _blank
        rel: noopener noreferrer
      - _component: building-blocks/core-elements/button
        text: CV ↗
        hideText: false
        link: /cv/
        iconName: ''
        iconColor: default
        iconPosition: before
        variant: tertiary
        size: sm
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: none
---
