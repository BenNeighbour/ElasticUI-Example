import * as React from "react";
import { EuiCollapsibleNav, EuiCollapsibleNavGroup } from "@elastic/eui";

import { EuiPinnableListGroup, EuiListGroupItem } from "@elastic/eui";

import { EuiFlexItem, EuiHorizontalRule, EuiShowFor } from "@elastic/eui";

interface Props {
  navIsDocked: boolean;
  navIsOpen: boolean;
  setNavIsOpen(isOpen: boolean): void;
  setNavIsDocked(isDocked: boolean): void;
}

const SideNav: React.FC<Props> = (props) => {
  return (
    <EuiCollapsibleNav
      id="guideCollapsibleNavAllExampleNav"
      aria-label="Main navigation"
      isOpen={props.navIsOpen}
      isDocked={props.navIsDocked}
      onClose={() => props.setNavIsOpen(false)}
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
            onPinClick={() => {}}
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
            onPinClick={() => {}}
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
              label={`${props.navIsDocked ? "Undock" : "Dock"} navigation`}
              onClick={() => {
                props.setNavIsDocked(!props.navIsDocked);
                localStorage.setItem(
                  "navIsDocked",
                  JSON.stringify(!props.navIsDocked)
                );
              }}
              iconType={props.navIsDocked ? "lock" : "lockOpen"}
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );
};

export default SideNav;
