import React, { FC } from "react";
import styled from "styled-components";

const VersionDataBlock: FC = () => {
  return (
    <>
      <VersionLine>
        We are using Node.js <Version id="node-version" />,
      </VersionLine>
      <VersionLine>
        Chromium <Version id="chrome-version" />,
      </VersionLine>
      <VersionLine>
        and Electron <Version id="electron-version" />.
      </VersionLine>
    </>
  );
};

export default VersionDataBlock;

const VersionLine = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const Version = styled.span`
  font-weight: 600;
`;
