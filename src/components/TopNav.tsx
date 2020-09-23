import * as React from "react";

import { EuiAvatar } from "@elastic/eui";
import { EuiHeaderSectionItemButton } from "@elastic/eui";

import { EuiIcon } from "@elastic/eui";

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from "@elastic/eui";

interface Props {
  navIsDocked: boolean;
  navIsOpen: boolean;
  setNavIsOpen(isOpen: boolean): void;
  setNavIsDocked(isDocked: boolean): void;
}

const TopNav: React.FC<Props> = (props) => {
  return (
    <EuiHeader
      theme="dark"
      sections={[
        {
          items: [
            <>
              <EuiHeaderSectionItemButton
                aria-label="Toggle main navigation"
                onClick={() => props.setNavIsOpen(!props.navIsOpen)}
              >
                <EuiIcon
                  onClick={() => props.setNavIsDocked(!props.navIsDocked)}
                  type={"menu"}
                  size="m"
                  aria-hidden="true"
                />
              </EuiHeaderSectionItemButton>
              <EuiHeaderLogo
                iconType="logoElastic"
                href="/"
                aria-label="Goes to home"
              >
                Elastic
              </EuiHeaderLogo>
              ,
              <EuiHeaderLinks aria-label="App navigation dark theme example">
                <EuiHeaderLink href="#" isActive>
                  Docs
                </EuiHeaderLink>

                <EuiHeaderLink href="#">Code</EuiHeaderLink>

                <EuiHeaderLink iconType="help" href="#">
                  Help
                </EuiHeaderLink>
              </EuiHeaderLinks>
              ,
            </>,
          ],
          borders: "right",
        },
        {
          items: [
            <EuiHeaderSectionItemButton
              aria-label="2 Notifications"
              notification={"2"}
            >
              <EuiIcon type="cheer" size="m" />
            </EuiHeaderSectionItemButton>,
            <EuiHeaderSectionItemButton aria-label="Account menu">
              <EuiAvatar name="John Username" size="s" />
            </EuiHeaderSectionItemButton>,
          ],
          borders: "none",
        },
      ]}
    />
  );
};

export default TopNav;
