import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      "https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "/#home",
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "/#contact",
          children: [
            {
              children: (
                <span>
                  <p>Contact</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "/#about",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>
                      About
                      <br />
                    </p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "/samples",
          children: [
            {
              children: (
                <span>
                  <p>Samples</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner30DataSource = {
  wrapper: { className: "banner3" },
  textWrapper: {
    className: "banner3-text-wrapper",
    children: [
      {
        name: "nameEn",
        className: "banner3-name-en",
        children: (
          <span>
            <span>
              <span>
                <p>
                  Seeking Experience &amp; Working Chances
                  <br />
                </p>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: "slogan",
        className: "banner3-slogan",
        children: "Ouni Mouhamed Amine",
        texty: true,
      },
      {
        name: "name",
        className: "banner3-name",
        children: (
          <span>
            Full stack web developer
            <br />
          </span>
        ),
      },
      {
        name: "button",
        className: "banner3-button ljwmirm1buu-editor_css",
        children: (
          <a href="#about">
            About Me
            <br />
          </a>
        ),
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>About me</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        children: (
          <span>
            <span>
              <span>
                <p>Self-taught front-end developer [2021 - Present].</p>
                <p>
                  I help people and clients reach their goals by building
                  user-centric digital products and interactive experiences.
                </p>
              </span>
            </span>
          </span>
        ),
        className: "title-content",
      },
      {
        name: "content2",
        children: (
          <span>
            <span>
              <span>
                I mainly focus on the small details that gives the design it's
                own beauty. <br />
              </span>
            </span>
          </span>
        ),
        className: "title-content",
      },
      {
        name: "title~ljwnzfdy17o",
        className: "ljwnzh2ouo-editor_css",
        children: (
          <span>
            <span>
              <span>
                <span>
                  <i>
                    "The devil lies in the details" -Paulo Coelho
                    <br />
                  </i>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: "home-page-wrapper content6-wrapper" },
  OverPack: { className: "home-page content6" },
  textWrapper: { className: "content6-text", xs: 24, md: 10 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Capabilities</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  img: {
    children:
      "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997681/Programmer-amico_wtkdwu.svg",
    className: "content6-img ljwo8ykuksb-editor_css",
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: "block0",
        img: {
          children:
            "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          className: "content6-icon",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <p>Development</p>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <span>
                <p>
                  {" "}
                  Front-end development, Responsive &amp; Mobile Websites,
                  Mobile apps, Animations, branding applications.{" "}
                </p>
              </span>
            </span>
          ),
        },
      },
      {
        name: "block1",
        img: {
          className: "content6-icon",
          children:
            "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <p>Product Design </p>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <p>
                User Interface Design, Design Systems, Responsive &amp; Mobile
                Websites, Modular Grid Systems, Brand guidelines{" "}
              </p>
            </span>
          ),
        },
      },
      {
        name: "block2",
        img: {
          className: "content6-icon",
          children:
            "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <p>UI/UX </p>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <p>
                {" "}
                User Experience Design, Rapid Prototyping, UX Reviews,
                Interaction Design, Customer journeys{" "}
              </p>
            </span>
          ),
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: "home-page-wrapper content5-wrapper" },
  page: { className: "home-page content5" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>
              Skill &amp; Tools.
              <br />
            </p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <span>
            <span>
              <p>For those who know what they’re looking for. </p>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      {
        name: "block0",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688995955/584830f5cef1014c0b5e4aa1_abbn6s.png",
          },
          content: { children: "React" },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996058/5848309bcef1014c0b5e4a9a_vvrlq6.png",
          },
          content: { children: "Redux" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996381/613b64fe30e8530004ba3a03_miaapd.png",
          },
          content: { children: "JavaScript" },
        },
      },
      {
        name: "block3",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997472/pngwing.com_4_lhokn1.png",
          },
          content: { children: "NodeJs" },
        },
      },
      {
        name: "block4",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996382/62a75640223343fbc2207d10_vsqj2a.png",
          },
          content: { children: "Webpack" },
        },
      },
      {
        name: "block5",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996381/5847f5c3cef1014c0b5e489d_zf6fyr.png",
          },
          content: { children: "HTML5" },
        },
      },
      {
        name: "block6",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688996382/62b2221b038aad4d3ed7ca30_otpaac.png",
          },
          content: { children: "CSS3" },
        },
      },
      {
        name: "block7",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
          },
          content: { children: "Ant Design" },
        },
      },
      {
        name: "block8",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children: "https://vitejs.dev/logo.svg",
          },
          content: { children: "Vite" },
        },
      },
      {
        name: "block9",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997509/pngwing.com_5_hnydpc.png",
          },
          content: { children: "MongoDB" },
        },
      },
      {
        name: "block10",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997354/pngwing.com_2_gvvjaq.png",
          },
          content: { children: "ExpressJs" },
        },
      },
      {
        name: "block11",
        className: "block",
        md: 4,
        xs: 24,
        children: {
          wrapper: { className: "content5-block-content" },
          img: {
            children:
              "https://res.cloudinary.com/dk1dqqqof/image/upload/v1688997355/pngwing.com_3_r2abx2.png",
          },
          content: { children: "Docker" },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: "home-page-wrapper content9-wrapper" },
  page: { className: "home-page content9" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "image",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",
        className: "title-image",
      },
      {
        name: "title",
        children: (
          <span>
            <p>Experiences</p>
          </span>
        ),
        className: "title-h1",
      },
    ],
  },
  block: {
    className: "timeline",
    children: [
      {
        name: "block2",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <br />
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <span>
                  2020 - 2021
                  <br />
                </span>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>
                  College &amp; Collaborative Projects
                  <br />
                </p>
              </span>
            ),
          },
          content: {
            className: "block-content",
            children: (
              <span>
                <span>
                  <p>
                    In general during my early University period, i was so
                    obsessed and curious with coding, i joined coding clubs and
                    participated in many hackathons.
                  </p>
                  <p>
                    Working with freelancers on basic tasks&nbsp; enhanced my
                    knowledge level. I also made some private mini projects.{" "}
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block~ljwp3cr57ab",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <br />
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <br />
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>
                  2021 - 2022
                  <br />
                </p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                Summer Part Time Developer
                <br />
              </span>
            ),
          },
          content: {
            className: "block-content",
            children: (
              <span>
                <p>
                  I worked under the leadership of neopolis development to
                  create a screening platform to test the knowledge level of new
                  candidates with the ability to create dynamic and customisable
                  quizes and coding games.{" "}
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block~ljwp4d2ppf",
        className: "block-wrapper",
        playScale: 0.3,
        children: {
          imgWrapper: { className: "image-wrapper" },
          textWrapper: { className: "text-wrapper" },
          img: {
            className: "block-img",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png",
          },
          icon: {
            className: "block-icon",
            children:
              "https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg",
          },
          name: {
            className: "block-name",
            children: (
              <span>
                <br />
              </span>
            ),
          },
          post: {
            className: "block-post",
            children: (
              <span>
                <br />
              </span>
            ),
          },
          time: {
            className: "block-time",
            children: (
              <span>
                <p>
                  2022 - Present
                  <br />
                </p>
              </span>
            ),
          },
          title: {
            className: "block-title",
            children: (
              <span>
                <p>
                  Graduation Project &amp; Full-time Contract
                  <br />
                </p>
              </span>
            ),
          },
          content: {
            className: "block-content",
            children: (
              <span>
                <div>
                  <p>
                    Working on a platform that digitalize the whole HR process.{" "}
                    <br />
                  </p>
                  <p>
                    Working as a full-time web developer under
                    Neopolis-Development.
                    <br />
                  </p>
                </div>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title",
    children: (
      <span>
        <p>Samples</p>
      </span>
    ),
  },
  content: {
    className: "content1-content",
    children: (
      <span>
        <p>
          Proceed to the samples page if you are curious about my previous
          works, you will find demonstrative videos, and drawings.
        </p>
      </span>
    ),
  },
  button: {
    className: "",
    children: {
      a: {
        className: "button",
        href: "/samples",
        children: (
          <span>
            <p>Samples</p>
          </span>
        ),
      },
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <span>
                  <br />
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>Contact</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              href: "#",
              children: (
                <span>
                  <p>
                    +216 55 512 924
                    <br />
                  </p>
                </span>
              ),
            },
            {
              name: "link1",
              href: "#",
              children: (
                <span>
                  <p>moe.ouni20@gmail.com</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              Socials
              <br />
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: "#",
              name: "link0",
              children: (
                <span>
                  <span>
                    <p>Facebook</p>
                  </span>
                </span>
              ),
              className: "ljwplmzbnea-editor_css",
            },
            {
              href: "#",
              name: "link1",
              children: (
                <span>
                  <p>Instagram</p>
                </span>
              ),
              className: "ljwplvvbh8h-editor_css",
            },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <p>
                More
                <br />
              </p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: "#",
              name: "link0",
              children: (
                <span>
                  <p>GitHub</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>©2023 by Moe All Rights Reserved</span>
      </span>
    ),
  },
};
