import { BetAmountInput } from '@/layout/components/BetAmountInput';
import { BetButton } from '@/layout/components/BetButtom';
import { ChannelList } from '@/layout/components/ChannelList';
import { MatchChart } from '@/layout/components/MatchChart';
import { MatchInformation } from '@/layout/components/MatchInformation';
import { NavigationBar } from '@/layout/components/NavigationBar';
import { PlaceBetHeader } from '@/layout/components/PlaceBetHeader';
import { VideoIframe } from '@/layout/components/VideoIframe';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <NavigationBar />
      <ChannelList />
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="col-span-1 lg:col-span-2">
          <VideoIframe />
        </div>
        <div className="col-span-1">
          <MatchInformation />
          <PlaceBetHeader />
          <BetButton />
          <BetAmountInput />
          <MatchChart />
        </div>
      </div>
    </Main>
  );
};

export default Index;
