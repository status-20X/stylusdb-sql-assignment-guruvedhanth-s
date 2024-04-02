function parseQuery(query) {
    // console.log(query)
    const selectRegex = /SELECT\s+(.+?)\s+FROM\s+(.+?)(?:\s+WHERE|\s+GROUP\s+BY|\s+ORDER\s+BY|\s+HAVING|$)/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table] = match;
        const formattedFields = fields.split(',').map(field => field.trim());
        return {
            fields: formattedFields,
            table: table.trim()
        };
    } else {
        throw new Error('Invalid query format');
    }
}

module.exports = parseQuery;
