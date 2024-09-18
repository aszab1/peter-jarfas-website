import { Button, Flex, Text} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

export default function Pagination({ totalReviews, reviewsPerPage, currentPage, setCurrentPage }) {

  const { t } = useTranslation()
  const totalPages = Math.ceil(totalReviews / reviewsPerPage)

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    })
  }

  return (
    <Flex justifyContent="center" alignItems="center" mt={6}>
      {currentPage > 1 && (
        <Button
        className="pagination-button"
          leftIcon={<ChevronLeftIcon />}
          onClick={() => handlePageChange(currentPage - 1)}
          mr={2}
          size='lg'
          border='none'
          _hover={{ transform: 'scale(1.20)'}} 
          
          
        >{t("prev")}</Button>
      )}
      <Flex alignItems="center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            className='pagination-nrs'
            onClick={() => handlePageChange(i + 1)}
            bg="transparent"
            _hover={{ bg: 'gray.100' }}
            mx={0}
            size="lg"
            p={1}
            minW={0}
            border='none'
            
          >
            <Text
            className='pagination-nrs'
              fontSize={currentPage === i + 1 ? "2xl" : "lg"}
              fontWeight={currentPage === i + 1 ? "bold" : "normal"}
              transition="all 0.2s"
              border='none'
              _hover={{ transform: 'scale(1.30)'}} 
            >
              {i + 1}
            </Text>
          </Button>
        ))}
      </Flex>
      {currentPage < totalPages && (
        <Button
          rightIcon={<ChevronRightIcon />}
          onClick={() => handlePageChange(currentPage + 1)}
          ml={2}
          variant="outline"
          border='none'
          _hover={{ transform: 'scale(1.20)'}} 
        >{t("next")}</Button>
      )}
    </Flex>
  )
}
