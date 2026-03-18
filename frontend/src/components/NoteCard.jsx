import { PenSquareIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from "../lib/utils";

const NoteCard = ({ note }) => {
    return (
        <Link to={`/note/${note._id}`}
            className='card  hover:shadow-lg transition-all duration-200 
            border-t-8 border-1 border-solid border-[#00FF9D] m-3 bg-[#000000]'
        >
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 border-[#00FF9D">{note.content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className='size-4' />
                        <button className='btn btn-ghost btn-xs text-error'>
                            <TrashIcon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard