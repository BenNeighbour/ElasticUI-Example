import * as React from "react";
import {
  dateFormatAliases,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiResizableContainer,
  EuiText,
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
        <br />
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Other Stats</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              Business Costs
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <EuiResizableContainer style={{ height: "400px" }}>
              {(EuiResizablePanel, EuiResizableButton) => (
                <>
                  <EuiResizablePanel initialSize={50} minSize="30%">
                    <EuiText>
                      <p>{text}</p>
                    </EuiText>
                  </EuiResizablePanel>

                  <EuiResizableButton />

                  <EuiResizablePanel initialSize={50} minSize="30%">
                    <EuiText>
                      <p>{text}</p>
                    </EuiText>
                  </EuiResizablePanel>
                </>
              )}
            </EuiResizableContainer>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

const text: string =
  "Totam ipsam iusto est iste ad delectus. Ex dolor rerum dolorem libero eos laboriosam quae perferendis. Est aspernatur ratione. Ad ut vero iure dolores consequatur. Possimus iure ipsa et dolore maiores natus magnam fugit. Libero ut explicabo quo eveniet. Provident sit ducimus aut. Itaque aliquam laudantium. Quasi modi eveniet autem error eveniet. Sequi alias consectetur. Architecto quidem ut. Quod corrupti voluptatum consectetur recusandae consequatur vel. Aut molestiae recusandae labore iure. Et ea minima sit tempora voluptatem tempora et unde ut.";

export default Home;
