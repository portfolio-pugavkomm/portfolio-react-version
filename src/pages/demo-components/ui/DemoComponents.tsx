import { MEActivityIndicator } from '@shared/ui/MEActivityIndicator';
import { MEButton } from '@shared/ui/MEButton';
import { MEFlexContainer } from '@shared/ui/MEContainer';
import { METag, type TagSize } from '@shared/ui/METag';
import { METext } from '@shared/ui/METext';

import { ColorDanger500, ColorInfo500, ColorSecondary500 } from '../../../app/styles/tokens/tokens';

export const DemoComponents = () => {
  return (
    <MEFlexContainer gap={'4xl'}>
      <MEActivityIndicator color={'red'} />
      <MEActivityIndicator color={'blue'} />
      <MEActivityIndicator size={'small'} />
      <MEActivityIndicator size={'extra'} color={ColorInfo500} />
      <MEActivityIndicator size={'extra'} color={ColorSecondary500} />
      <MEActivityIndicator size={'extra'} color={ColorDanger500} />
      <MEFlexContainer direction={'row'} gap={'x'}>
        <METag variant={'primary'}> primary</METag>
        <METag variant={'secondary'}>secondary</METag>
        <METag variant={'info'}>info</METag>
        <METag variant={'danger'}>danger</METag>
        {(['s', 'm', 'xl', 'xxl'] as TagSize[]).map((size) => (
          <METag variant={'info'} size={size} key={size}>
            {size}
          </METag>
        ))}
      </MEFlexContainer>
      <MEFlexContainer gap={'2xl'}>
        <h1>Demo page</h1>
        <h2>Buttons</h2>
        <MEFlexContainer gap={'x'}>
          <MEFlexContainer direction={'row'}>
            <MEButton variant={'primary'} size={'small'}>
              Button
            </MEButton>

            <MEButton variant={'primary'} size={'medium'}>
              Button
            </MEButton>

            <MEButton variant={'primary'} size={'huge'}>
              Button
            </MEButton>

            <MEFlexContainer direction={'col'}>
              <MEButton variant={'primary'}>Primary</MEButton>
              <MEButton variant={'primary'} disabled>
                Primary disabled
              </MEButton>
            </MEFlexContainer>
            <MEFlexContainer direction={'col'}>
              <MEButton variant={'secondary'}>Secondary</MEButton>
              <MEButton variant={'secondary'} disabled>
                Secondary disabled
              </MEButton>
            </MEFlexContainer>
          </MEFlexContainer>
          <MEFlexContainer direction={'row'}>
            <MEFlexContainer direction={'col'}>
              <MEButton variant={'linked'}>Primary</MEButton>
              <MEButton variant={'linked'} disabled>
                Primary disabled
              </MEButton>
              <MEButton variant={'primary'} loading>
                Loading button
              </MEButton>
            </MEFlexContainer>
            <MEFlexContainer direction={'col'}>
              <MEButton variant={'canceled'}>Secondary</MEButton>
              <MEButton variant={'canceled'} disabled>
                Secondary disabled
              </MEButton>
            </MEFlexContainer>
          </MEFlexContainer>
        </MEFlexContainer>
        <h2>Typography</h2>
        <MEFlexContainer gap={'x'}>
          <METext textWeight={'regular'} textSize={'s'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sapien sodales,
            congue mi at, porttitor erat. Pellentesque laoreet sodales arcu. Nullam pretium magna
            sed metus ultrices, eget hendrerit nisl convallis. Ut ac ipsum libero. Mauris sagittis
            justo a tellus finibus blandit. Sed vitae rhoncus turpis. Morbi malesuada ultrices
            felis. Integer interdum sit amet ante nec ornare. Donec laoreet rutrum lectus sed
            semper. Nulla varius dignissim tempus. Cras ut arcu eu ex lobortis ultrices. Curabitur
            sagittis enim ut augue sollicitudin, nec blandit tellus sagittis. Curabitur vestibulum
            fermentum porta. Quisque efficitur nunc congue dolor ornare, nec mollis nibh bibendum.
            Aliquam faucibus, felis a suscipit tristique, magna ante tempor lectus, at consectetur
            nisl est euismod augue. Proin non accumsan metus, sit amet dictum ex. Mauris venenatis
            dolor eget justo blandit varius. Cras lobortis nibh vitae dolor finibus sodales.
            Maecenas a tincidunt orci, nec elementum ipsum. Quisque fringilla odio non ullamcorper
            consequat. Curabitur ut facilisis felis. Praesent volutpat pulvinar consectetur. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisl quam, iaculis
            sollicitudin sapien nec, commodo malesuada nisl. Phasellus consequat nisl eget libero
            pellentesque dictum. Praesent vel lectus vitae leo sagittis fringilla. Duis odio sapien,
            mollis a sagittis id, imperdiet quis urna. Ut mauris eros, tincidunt in sem ut, tempor
            ultrices sapien. Mauris convallis diam vitae ante aliquet, id dignissim sem imperdiet.
            Curabitur tincidunt ornare urna eget convallis. Mauris nec lobortis nunc, id maximus
            nisl. Duis consequat, mi nec luctus semper, eros magna vulputate tortor, nec dictum ex
            nulla in metus. In hac habitasse platea dictumst. Morbi condimentum porttitor
            condimentum. Praesent sagittis eget lacus ac rhoncus. Duis ultricies fringilla enim quis
            facilisis. Proin luctus diam a lorem rutrum, quis ultricies magna consectetur. Sed sit
            amet faucibus magna. Etiam egestas tellus blandit, efficitur elit eu, rutrum tellus.
            Aenean bibendum urna non arcu hendrerit vestibulum. Phasellus ac nulla facilisis,
            eleifend urna non, tempus dui. Aliquam ex sem, suscipit a tellus eget, pulvinar finibus
            sapien. Fusce vehicula diam orci, non ultrices massa ultrices nec. Nulla ullamcorper
            venenatis odio id faucibus. Mauris nec elementum ligula. Etiam eu tincidunt enim. Aenean
            vitae lectus aliquam, congue risus eu, dictum lorem. Proin at elit eget est imperdiet
            scelerisque. Cras fringilla risus eu congue volutpat. Donec ornare diam nunc, molestie
            iaculis nulla fringilla a. Curabitur interdum dolor ut tincidunt vulputate. Nunc eget
            dolor fermentum, gravida dolor quis, tincidunt sapien. Aliquam feugiat risus eget dui
            scelerisque, eget facilisis sapien elementum. Sed nec varius velit, vitae lobortis
            lorem. In et scelerisque purus.
          </METext>
        </MEFlexContainer>
      </MEFlexContainer>
    </MEFlexContainer>
  );
};
