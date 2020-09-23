import * as React from "react";
import {
  dateFormatAliases,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  formatDate,
} from "@elastic/eui";
import {
  AreaSeries,
  Axis,
  Chart,
  niceTimeFormatByDay,
  Settings,
  timeFormatter,
} from "@elastic/charts";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Overview</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              Revenue this Month
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <Chart size={{ height: 200 }}>
              <Settings showLegend={false} />
              <AreaSeries
                id="financial"
                name="Financial"
                data={[
                  [0, 1],
                  [1, 2],
                ]}
                xScaleType="time"
                xAccessor={0}
                yAccessors={[1]}
              />

              <Axis
                title={formatDate(Date.now(), dateFormatAliases.date)}
                id="bottom-axis"
                position="bottom"
                tickFormat={timeFormatter(niceTimeFormatByDay(1))}
                showGridLines
              />
              <Axis id="left-axis" position="left" showGridLines />
            </Chart>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Home;
