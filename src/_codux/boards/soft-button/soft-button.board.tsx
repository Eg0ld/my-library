import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import softCover from '../../../_codux/covers/softCover.png'

export default createBoard({
    name: 'SoftButton',
    Board: () => <Theme><Button variant='soft'>Hello</Button></Theme>,
    isSnippet: true,
    cover: softCover
});
