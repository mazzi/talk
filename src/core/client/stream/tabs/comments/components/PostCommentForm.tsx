import { FormState } from "final-form";
import { Localized } from "fluent-react/compat";
import React, { StatelessComponent } from "react";
import { Field, Form, FormSpy } from "react-final-form";

import { OnSubmit } from "talk-framework/lib/form";
import { required } from "talk-framework/lib/validation";
import { PropTypesOf } from "talk-framework/types";
import {
  AriaInfo,
  Button,
  Flex,
  HorizontalGutter,
  Typography,
} from "talk-ui/components";

import PoweredBy from "./PoweredBy";
import RTE from "./RTE";

import SubmitStatusContainer from "../containers/SubmitStatusContainer";
import styles from "./PostCommentForm.css";

interface FormProps {
  body: string;
}

export interface PostCommentFormProps {
  onSubmit: OnSubmit<FormProps>;
  onChange?: (state: FormState) => void;
  initialValues?: FormProps;
  submitStatus: PropTypesOf<SubmitStatusContainer>["status"];
}

const PostCommentForm: StatelessComponent<PostCommentFormProps> = props => (
  <Form onSubmit={props.onSubmit} initialValues={props.initialValues}>
    {({ handleSubmit, submitting, hasValidationErrors }) => (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.root}
        id="comments-postCommentForm-form"
      >
        <FormSpy onChange={props.onChange} />
        <HorizontalGutter>
          <Field name="body" validate={required}>
            {({ input, meta }) => (
              <HorizontalGutter size="half">
                <Localized id="comments-postCommentForm-rteLabel">
                  <AriaInfo
                    component="label"
                    htmlFor="comments-postCommentForm-field"
                  >
                    Post a comment
                  </AriaInfo>
                </Localized>
                <Localized
                  id="comments-postCommentForm-rte"
                  attrs={{ placeholder: true }}
                >
                  <RTE
                    inputId="comments-postCommentForm-field"
                    onChange={({ html }) => input.onChange(html)}
                    value={input.value}
                    placeholder="Post a comment"
                    disabled={submitting}
                  />
                </Localized>
                {meta.touched &&
                  (meta.error || meta.submitError) && (
                    <Typography align="right" color="error">
                      {meta.error || meta.submitError}
                    </Typography>
                  )}
                <SubmitStatusContainer status={props.submitStatus} />
              </HorizontalGutter>
            )}
          </Field>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <PoweredBy className={styles.poweredBy} />
            <Localized id="comments-postCommentForm-submit">
              <Button
                color="primary"
                variant="filled"
                disabled={submitting || hasValidationErrors}
                type="submit"
              >
                Submit
              </Button>
            </Localized>
          </Flex>
        </HorizontalGutter>
      </form>
    )}
  </Form>
);

export default PostCommentForm;
