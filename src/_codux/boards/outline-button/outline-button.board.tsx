import { createBoard } from '@wixc3/react-board';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import outlineCover from '../../../_codux/covers/outlineCover.png'

export default createBoard({
    name: 'OutlineButton',
    Board: () => <Theme><Button variant='outline'>Hello</Button></Theme>,
    isSnippet: true,
    cover: outlineCover
});
