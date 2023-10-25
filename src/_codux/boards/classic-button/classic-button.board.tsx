import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import classicCover from '../../../_codux/covers/classicCover.png'

export default createBoard({
    name: 'ClassicButton',
    Board: () => <Theme><Button variant='classic'>Hello</Button></Theme>,
    isSnippet: true,
    cover: classicCover
});
