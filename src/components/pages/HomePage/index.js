import React from 'react'
import uuid from 'uuid'

import { Separator, SectionTitle, Avatar, ProgressBar, PhotoGallery } from 'components'

import {
  Section,
  Banner,
  OrgInfo,
  Goal,
  Hr,
  Title,
  Description,
  ButtonDonate,
  Content,
  Sidebar,
  Owner,
  Information,
  Donator,
} from './styled-components'

import bannerOrg from './banner-org.jpg'
import greenpeace from './greenpeace.png'
import photo1 from './photo1.jpg'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'
import photo5 from './photo5.jpg'

const dummyDonators = [
  {
    src: 'https://randomuser.me/api/portraits/women/62.jpg',
    name: 'Dana Hollowitz',
    description: '10$ - 3 weeks ago',
  }, {
    src: 'https://randomuser.me/api/portraits/women/72.jpg',
    name: 'Maya Shummer',
    description: '20$ - 3 weeks ago',
  }, {
    src: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Ryan Harris',
    description: '40$ - 6 weeks ago',
  }, {
    src: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Dan Stoker',
    description: '30$ - 5 weeks ago',
  },
]

const HomePage = () => {
  const renderDonators = (donators) => {
    return donators.map((donator) => {
      return (
        <Donator key={uuid.v4()} src={donator.src} name={donator.name} description={donator.description} />
      )
    })
  }

  return (
    <Section>
      <Banner src={bannerOrg}>
        <OrgInfo>
          <Goal><span>$1,207</span> of $1,500 goal</Goal>
          <ProgressBar progress={80} />
          Raised by 15 people in 1 month
          <Hr />
          <Title>Saving the White Wolf</Title>
          <Description>
            {`The big bad wolf - hardly any other animal has 
            been linked to so many negative characteristics and has made 
            humans shudder as much as the wolf.`}
          </Description>
          <ButtonDonate>DONATE NOW</ButtonDonate>
        </OrgInfo>
      </Banner>

      <Information>
        <Content>
          <SectionTitle>Story</SectionTitle>
          <p>
            {`Stitching domed her with certainly elite. But the officers. 
            Have large incentive a we this approved to he drunk the parameters 
            city regretting make great the instruments, a with that average past, 
            and was decided early beginning is he one our first to towards the 
            sides game, he of affects.`}
          </p>
          <br />
          <p>
            {`Secure a belt to copy irregular by invitation that's heard people. 
            Attempt. Redesigns. Out all to the according it hungrier first it odd 
            she would a moving and found turned herself his for manipulate stash a 
            is of surprise at the god, village at derived activity sitting the live 
            the framework conduct, with might some that and as the ambushed legislators, 
            headline they dry as troubled option ran facilitate of logbook at console 
            the not out a on blind one set shine. Beacon control how the and this don't 
            his better object do up from into real in universe a.`}
          </p>

          <Separator />

          <SectionTitle>Photos</SectionTitle>
          <PhotoGallery photos={[photo1, photo2, photo3, photo4, photo5]} />
        </Content>

        <Sidebar>
          <Owner>
            <Avatar src={greenpeace} name="Greenpeace" description="Created at: friday 27, 2018" />
            <Separator />
            <p>
              {`Greenpeace is a non-governmental environmental organization 
              with offices in over 39 countries and with an international 
              coordinating body in Amsterdam, the Netherlands.`}
            </p>
            <Separator />
            <ButtonDonate>DONATE NOW</ButtonDonate>
          </Owner>

          <br />
          <p>LATEST DONATIONS</p>
          <br />
          {renderDonators(dummyDonators)}
        </Sidebar>
      </Information>
    </Section>
  )
}

export default HomePage
