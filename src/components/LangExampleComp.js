import React from 'react';
import { useTranslation } from 'react-i18next';

const LangExampleComp = () => {
  const { t } = useTranslation();

  return <span>{t('welcome')}</span>;
};

export default LangExampleComp;