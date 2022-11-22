import Catalog from "./Catalog";
import SearchBar from "../Utilities/Filters/SearchBar";
import Dropdown from "../Utilities/Filters/Dropdown";

import {
  PageContainer, PageHeader, HeaderTextLine, SubTextLine, Filters} from "./ShopSection.styled";

export default function ShopSection() {
  return (
    <>
      <PageContainer>
        <SearchBar />
        <PageHeader>
          <HeaderTextLine>bags made with love in lesvos</HeaderTextLine>
          <SubTextLine>Welcome to the webshop!</SubTextLine>
        </PageHeader>
        <Filters>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </Filters>

        <Catalog />

      </PageContainer>
    </>
  );
}
