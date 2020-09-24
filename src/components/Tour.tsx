import { EuiButtonEmpty, EuiCodeBlock, EuiForm, EuiFormRow, EuiSpacer, EuiTextArea, EuiTourStep } from "@elastic/eui";
import * as React from "react";

interface Props {}

const demoTourSteps = [
  {
    step: 1,
    title: "Step 1",
    content: (
      <span>
        <p>Copy and paste this sample query.</p>
        <EuiSpacer />
        <EuiCodeBlock language="html" paddingSize="s" isCopyable>
          {"SELECT email FROM “kibana_sample_data_ecommerce”"}
        </EuiCodeBlock>
      </span>
    ),
    anchorRef: "tourStep2",
  },
  {
    step: 2,
    title: "Step 2",
    content: <p>Save your changes.</p>,
    anchorRef: "tourStep1",
  },
];

const Tour: React.FC<Props> = (props) => {
  return (
      <div style={{
        margin: "2vh"
    }}>
      <EuiButtonEmpty iconType="refresh" flush="left" onClick={() => {}}>
        Reset tour
      </EuiButtonEmpty>
      <EuiSpacer />
      <EuiForm>
        <EuiFormRow label="Enter an ES SQL query">
          <EuiTourStep
                      content={demoTourSteps[0].content}
                      isStepOpen={true}
                      onFinish={() => { }}
            step={1}
            stepsTotal={demoTourSteps.length}
            subtitle="Demo Tour"
            title={"Title"}
            anchorPosition="rightUp"
          >
            <EuiTextArea
              placeholder="Placeholder text"
              aria-label="Enter ES SQL query"
              style={{ width: 400 }}
            />
          </EuiTourStep>
        </EuiFormRow>
      </EuiForm>
    </div>
  );
};

export default Tour;
