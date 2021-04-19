import React,{useRef,useState} from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  InputOnChangeData,
} from 'semantic-ui-react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { HeaderEmptyPanel } from './styled'
import { isMobile, isScreen750to1440 } from '../../utils/screen'
import { addPrefixForHash, containSpecialChar } from '../../utils/string'
import {stringNumCheck} from "../../lib/scripts";
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'

const PageHeader = ({mobile}:{mobile?:boolean}) => {

  const [t] = useTranslation()
  const history = useHistory()
  const [searchValue,setSearchValue] = useState('')
  const handleSearch = () => {
    const query = searchValue.trim().replace(',', '')
    if (!query || containSpecialChar(query)) {
      history.push(`/searchfail?q=${query}`)
      return
    }else if (stringNumCheck(searchValue)){
      history.push(`/block/${query}`)
    }else if (searchValue.startsWith("seele")){
      history.push(`/account/${query}`)
    }else if (searchValue.length === 64){
      history.push(`/tx/${query}`)
    }else {
      history.push(`/searchfail?q=${query}`)
      return
    }
    setSearchValue("")
  }

  const onInpuChange = (e: any,data: InputOnChangeData) => {setSearchValue(data.value)}
  
  return (
    <Container text>
    <Header
      as='h1'
      content={i18n.t('common.seele_scan')}
      inverted
      style={{
        fontSize: mobile ? '2.5em' : '3.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.2em' : '0.5em',
      }}
    />

    <Input value={searchValue} fluid icon='search' iconPosition='left' placeholder='Search by block,transaction,address...' 
      onChange= {onInpuChange}
      action={{
        color: 'blue',
        content: `${i18n.t('common.search')}`,
        onClick: ()=>{handleSearch()},
        }}  />

  </Container>
  )
}

PageHeader.propTypes = {
  mobile: PropTypes.bool,
}

export default PageHeader
