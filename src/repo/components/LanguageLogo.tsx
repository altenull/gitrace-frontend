import Image from 'next/image';
import { LanguageKey } from '../../core/enums/language-key.enum';

interface Props {
  language: LanguageKey;
}

const LanguageLogo: React.FC<Props> = ({ language }: Props) => {
  const transformSpecialLanguage = (language: LanguageKey) => (language === LanguageKey.CSharp ? 'CSharp' : language);

  return (
    <Image
      src={`/images/languages/language-${transformSpecialLanguage(language)}.png`}
      alt={language}
      width={24}
      height={24}
    />
  );
};

export default LanguageLogo;
