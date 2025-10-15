interface PreviousSearchesProps {
    searches: string[]

    onLabelClicked: (term: string) => void
}
export default function PreviousSearches({ searches, onLabelClicked }: PreviousSearchesProps) {
    return (
        <div className='previous-searches'>
            <h2>Búsquedas previas</h2>
            <ul className='previous-searches-list'>
                {searches.map((term) => (
                    <li key={term}
                        onClick={() => onLabelClicked(term)}
                    >{term}</li>
                ))}
            </ul>
        </div>
    )
}
