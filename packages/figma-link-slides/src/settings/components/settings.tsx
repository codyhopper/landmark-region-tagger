import {
  Button,
  Checkbox,
  Columns,
  Container,
  Muted,
  Text,
  Textbox,
  useForm,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h, JSX } from 'preact'

import {
  CloseUIHandler,
  FormState,
  SettingsProps,
  SubmitHandler
} from '../utilities/types.js'
import styles from './settings.css'

export function Settings(props: SettingsProps): JSX.Element {
  const { disabled, formState, handleSubmit, initialFocus, setFormState } =
    useForm<FormState>(props, {
      close: function () {
        emit<CloseUIHandler>('CLOSE_UI')
      },
      submit: function (formState: FormState) {
        emit<SubmitHandler>('SUBMIT', formState)
      },
      validate: function ({ flowName }: FormState) {
        return flowName !== ''
      }
    })
  const { flowName, shouldNumberFrameNodes } = formState
  return (
    <Container space="medium">
      <VerticalSpace space="medium" />
      <Columns space="large">
        <div class={styles.text}>
          <Text>
            <Muted>Flow name</Muted>
          </Text>
        </div>
        <Textbox
          name="flowName"
          onValueInput={setFormState}
          value={flowName}
          variant="underline"
        />
      </Columns>
      <VerticalSpace space="medium" />
      <Checkbox
        name="shouldNumberFrameNodes"
        onValueChange={setFormState}
        value={shouldNumberFrameNodes}
      >
        <Text>Number frames</Text>
      </Checkbox>
      <VerticalSpace space="large" />
      <Button
        {...initialFocus}
        disabled={disabled === true}
        fullWidth
        onClick={handleSubmit}
      >
        Save Settings
      </Button>
      <VerticalSpace space="small" />
    </Container>
  )
}
