import {combineReducers} from 'redux'
import Vocab from './VocabReducer'
import User from './UserReducer'
import Bookmark from './BookmarkReducer'
import Answer from './AnswerReducer'
const rootReducer = combineReducers({
        users:User,
        vocabs:Vocab,
        bookmarks:Bookmark,
        answers:Answer
})
export default rootReducer