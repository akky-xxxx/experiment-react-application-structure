import { useTranslationsService } from "@shared/utilities/usedTranslations.service"

export const useFacade = () => {
  const t = useTranslationsService()

  return { t }
}
