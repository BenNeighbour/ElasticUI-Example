import * as React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiAvatar, EuiBadge, EuiCollapsibleNav, EuiCollapsibleNavGroup } from "@elastic/eui";
import {
  EuiHeaderSectionItemButton,
} from "@elastic/eui";

import {
  EuiPinnableListGroup,
  EuiListGroupItem,
} from "@elastic/eui";

import {
  EuiIcon,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiShowFor,
} from "@elastic/eui";

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';;

interface Props { }

const App: React.FC<Props> = (props) => {
  const [navIsOpen, setNavIsOpen]: any = React.useState(
    JSON.parse(String(localStorage.getItem("navIsDocked"))) || false
  );
  const [navIsDocked, setNavIsDocked]: any = React.useState(
    JSON.parse(String(localStorage.getItem("navIsDocked"))) || false
  );

  return (
    <div className="App">
      <>
        <EuiCollapsibleNav
          id="guideCollapsibleNavAllExampleNav"
          aria-label="Main navigation"
          isOpen={navIsOpen}
          isDocked={navIsDocked}
          button={
            <EuiHeaderSectionItemButton
              aria-label="Toggle main navigation"
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              <EuiIcon type={"menu"} size="m" aria-hidden="true" />
            </EuiHeaderSectionItemButton>
          }
          onClose={() => setNavIsOpen(false)}
        >
          <EuiFlexItem grow={false} style={{ flexShrink: 0 }}></EuiFlexItem>

          <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
            <EuiCollapsibleNavGroup
              background="light"
              className="eui-yScroll"
              style={{ maxHeight: "40vh" }}
            >
              <EuiPinnableListGroup
                aria-label="Pinned links"
                listItems={[]}
                onPinClick={() => {

                }}
                maxWidth="none"
                color="text"
                gutterSize="none"
                size="s"
              />
            </EuiCollapsibleNavGroup>
          </EuiFlexItem>

          <EuiHorizontalRule margin="none" />

          <EuiFlexItem className="eui-yScroll">
            <EuiCollapsibleNavGroup
              title="Kibana"
              iconType="logoKibana"
              isCollapsible={true}
              initialIsOpen={true}
              onToggle={() => {}}
            >
              <EuiPinnableListGroup
                aria-label="Kibana"
                listItems={[]}
                onPinClick={() => { }}
                maxWidth="none"
                color="subdued"
                gutterSize="none"
                size="s"
              />
            </EuiCollapsibleNavGroup>

            <EuiShowFor sizes={["l", "xl"]}>
              <EuiCollapsibleNavGroup>
                <EuiListGroupItem
                  size="xs"
                  color="subdued"
                  label={`${navIsDocked ? "Undock" : "Dock"} navigation`}
                  onClick={() => {
                    setNavIsDocked(!navIsDocked);
                    localStorage.setItem(
                      "navIsDocked",
                      JSON.stringify(!navIsDocked)
                    );
                  }}
                  iconType={navIsDocked ? "lock" : "lockOpen"}
                />
              </EuiCollapsibleNavGroup>
            </EuiShowFor>
          </EuiFlexItem>
        </EuiCollapsibleNav>



        <EuiHeader
    theme="dark"
    sections={[
      {
        items: [
          <EuiHeaderLogo
            iconType="logoElastic"
            href="/"
            aria-label="Goes to home">
            Elastic
          </EuiHeaderLogo>,
          <EuiHeaderLinks aria-label="App navigation dark theme example">
            <EuiHeaderLink href="#" isActive>
              Docs
            </EuiHeaderLink>

            <EuiHeaderLink href="#">Code</EuiHeaderLink>

            <EuiHeaderLink iconType="help" href="#">
              Help
            </EuiHeaderLink>
          </EuiHeaderLinks>,
        ],
        borders: 'right',
      },
      {
        items: [
          <EuiBadge
            iconType="arrowDown"
            iconSide="right">
            Production logs
          </EuiBadge>,
          <EuiHeaderSectionItemButton
            aria-label="2 Notifications"
            notification={'2'}>
            <EuiIcon type="cheer" size="m" />
          </EuiHeaderSectionItemButton>,
          <EuiHeaderSectionItemButton aria-label="Account menu">
            <EuiAvatar name="John Username" size="s" />
          </EuiHeaderSectionItemButton>,
        ],
        borders: 'none',
      },
    ]}
  />
      </>
    </div>
  );
};

export default App;
