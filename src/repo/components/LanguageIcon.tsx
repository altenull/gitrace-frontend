import { ReactNode } from 'react';
import { LanguageKey } from '../../core/enums/language-key.enum';
import { HTMLIcon, JavaIcon, JavaScriptIcon, TypeScriptIcon } from '../../ui';

interface Props {
  language: LanguageKey;
}

const LanguageIcon: React.FC<Props> = ({ language }: Props) => {
  const languageToIconMap: { [P in LanguageKey]: ReactNode } = {
    [LanguageKey.JavaScript]: <JavaScriptIcon />,
    [LanguageKey.TypeScript]: <TypeScriptIcon />,
    [LanguageKey.Java]: <JavaIcon />,
    [LanguageKey.HTML]: <HTMLIcon />,
  };

  return <>{languageToIconMap[language]}</>;
};

export default LanguageIcon;
