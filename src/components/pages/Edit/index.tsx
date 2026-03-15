"use client"

import { Description } from "@forms/Description"
import { FieldName } from "@forms/FieldName"
import { RequirementLabel } from "@forms/RequirementLabel"
import { TextInput } from "@forms/TextInput"
import { FieldSet } from "@layouts/FieldSet"
import { MainLayout } from "@layouts/MainLayout"
import { Heading1 } from "@ui/Heading1"

import { RemainingCount } from "./components/features/RemainingCount"
import { NamesInput } from "./components/forms/NamesInput"
import styles from "./index.module.css"
import { useFacade } from "./useFacade"

import type { FC } from "react"

export const Edit: FC = () => {
  const { binds, counts, handleSubmitHandler, t } = useFacade()

  return (
    <MainLayout asideElement={<RemainingCount {...counts} />}>
      {/* TODO: こういうのは server component で良いので再設計 */}
      <Heading1>{t("pages.edit.pageTitle")}</Heading1>

      <form className={styles.form} onSubmit={handleSubmitHandler}>
        <FieldSet
          descriptionElement={<Description>{t("pages.edit.form.description.name")}</Description>}
          fieldNameElement={<FieldName>{t("pages.edit.form.label.name")}</FieldName>}
          inputElement={(
            <NamesInput firstNameBind={binds.firstNameBind} lastNameBind={binds.lastNameBind} />
          )}
          requirementElement={<RequirementLabel isRequired />}
        />

        <FieldSet
          descriptionElement={<Description>{t("pages.edit.form.description.email")}</Description>}
          fieldNameElement={<FieldName>{t("pages.edit.form.label.email")}</FieldName>}
          inputElement={<TextInput bind={binds.emailBind} />}
          requirementElement={<RequirementLabel isRequired />}
        />

        <FieldSet
          descriptionElement={<Description>{t("pages.edit.form.description.note")}</Description>}
          fieldNameElement={<FieldName>{t("pages.edit.form.label.note")}</FieldName>}
          inputElement={<TextInput bind={binds.noteBind} />}
          requirementElement={<RequirementLabel isRequired={false} />}
        />

        <button type="submit">{t("pages.edit.form.label.submit")}</button>
      </form>
    </MainLayout>
  )
}
