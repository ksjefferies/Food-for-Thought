import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    let navigate = useNavigate()

    const submitSearch = () => {
        navigate(`/recipe?q=${encodeURIComponent(searchValue)}`)
    }

    return (
        <InputGroup display={{ base: 'none', md: 'inherit' }}>
            <InputRightElement
                onClick={submitSearch}
                _hover={{ cursor: 'pointer' }}
                children={<FontAwesomeIcon
                    icon={faMagnifyingGlass} />
                } />
            <Input
                flexGrow={0}
                background='light gray'
                placeholder='Recipe Search'
                value={searchValue}
                onChange={(e => setSearchValue(e.target.value))}
                onKeyDown={(e) => e.key === 'Enter' && submitSearch()}
            />
        </InputGroup>
    )
}